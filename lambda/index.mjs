import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

const ses = new SESClient({});
const TO = "rodrigo@bouldertech.fi";
const FROM = process.env.SES_FROM_EMAIL; // must be verified in SES
// e.g. "SHEFA Holdings <hola@shefa.com>" or just the verified address

const CORS = {
  "Access-Control-Allow-Origin": process.env.ALLOWED_ORIGIN ?? "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "POST,OPTIONS",
  "Access-Control-Max-Age": "86400",
};

export async function handler(event) {
  if (event.requestContext?.http?.method === "OPTIONS") {
    return { statusCode: 204, headers: CORS, body: "" };
  }

  let body;
  try {
    body = JSON.parse(event.body ?? "{}");
  } catch {
    return { statusCode: 400, headers: CORS, body: JSON.stringify({ error: "Invalid JSON" }) };
  }

  const { name, company, email, message } = body;

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return {
      statusCode: 400,
      headers: CORS,
      body: JSON.stringify({ error: "Missing required fields" }),
    };
  }

  const html = `
<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>New contact from SHEFA website</title>
</head>
<body style="margin:0;padding:0;background:#f5f5f5;font-family:system-ui,Segoe UI,Roboto,Helvetica,Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" role="presentation">
<tr>
<td align="center" style="padding:24px 16px;">
<table width="600" cellpadding="0" cellspacing="0" role="presentation" style="max-width:600px;width:100%;background:#ffffff;border-radius:6px;overflow:hidden;border:1px solid #e5e5e5;">
<tr>
<td style="padding:32px 28px 24px;">
<h2 style="margin:0 0 16px;font-size:20px;color:#0C1015;">New contact from SHEFA website</h2>
<p style="margin:0 0 8px;font-size:14px;color:#555;line-height:1.6;"><strong style="color:#0C1015;">Name:</strong> ${esc(name)}</p>
<p style="margin:0 0 8px;font-size:14px;color:#555;line-height:1.6;"><strong style="color:#0C1015;">Company:</strong> ${esc(company || "—")}</p>
<p style="margin:0 0 8px;font-size:14px;color:#555;line-height:1.6;"><strong style="color:#0C1015;">Email:</strong> <a href="mailto:${esc(email)}" style="color:#0C1015;text-decoration:underline;">${esc(email)}</a></p>
<p style="margin:0 0 8px;font-size:14px;color:#555;line-height:1.6;"><strong style="color:#0C1015;">Message:</strong></p>
<div style="background:#f5f5f5;border-radius:4px;padding:16px;font-size:14px;color:#333;line-height:1.6;white-space:pre-wrap;">${esc(message)}</div>
</td>
</tr>
<tr>
<td style="padding:16px 28px;background:#0C1015;text-align:center;">
<p style="margin:0;font-size:12px;color:#ffffff;opacity:0.6;">Sent from shefa.com contact form</p>
</td>
</tr>
</table>
</td>
</tr>
</table>
</body>
</html>
  `;

  const text = `New contact from SHEFA website\n\nName: ${name}\nCompany: ${company || "—"}\nEmail: ${email}\n\nMessage:\n${message}`;

  try {
    await ses.send(
      new SendEmailCommand({
        Source: FROM,
        ReturnPath: FROM,
        Destination: { ToAddresses: [TO] },
        ReplyToAddresses: [email],
        Message: {
          Subject: { Data: `New contact from ${name}`, Charset: "UTF-8" },
          Body: {
            Text: { Data: text, Charset: "UTF-8" },
            Html: { Data: html, Charset: "UTF-8" },
          },
        },
      })
    );
    return { statusCode: 200, headers: CORS, body: JSON.stringify({ success: true }) };
  } catch (err) {
    console.error("[contact-handler] SES error:", err);
    return {
      statusCode: 500,
      headers: CORS,
      body: JSON.stringify({ error: "Failed to send email" }),
    };
  }
}

function esc(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
