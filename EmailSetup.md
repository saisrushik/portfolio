# EmailJS Setup Guide — Contact Form

This guide walks you through setting up [EmailJS](https://www.emailjs.com/) so that the Contact page sends real emails when visitors submit the form.

## Overview

The contact form collects the following fields and sends them via EmailJS:

| Field | Form Name | Required |
|---|---|---|
| Name | `from_name` | Yes |
| Email | `from_email` | Yes |
| Phone | `phone` | No |
| Subject | `subject` | Yes |
| Message | `message` | Yes |

## Step 1 — Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/) and sign up for a free account.
2. The free tier allows **200 emails per month**, which is sufficient for a portfolio contact form.

## Step 2 — Add an Email Service

1. In the EmailJS dashboard, go to **Email Services**.
2. Click **Add New Service**.
3. Choose your email provider (e.g., **Gmail**, Outlook, Yahoo, etc.).
4. Follow the prompts to connect your email account.
5. Once connected, note down the **Service ID** (e.g., `service_abc123`).

## Step 3 — Create an Email Template

1. Go to **Email Templates** in the dashboard.
2. Click **Create New Template**.
3. Design your template using the variables that match the form field names. Example template:

   **Subject:**
   ```
   Portfolio Contact: {{subject}}
   ```

   **Body:**
   ```
   You received a new message from your portfolio website.

   Name: {{from_name}}
   Email: {{from_email}}
   Phone: {{phone}}
   Subject: {{subject}}

   Message:
   {{message}}
   ```

4. Set the **To Email** to your personal email address (e.g., `saisrushik98@gmail.com`).
5. Set **From Name** to `{{from_name}}` and **Reply To** to `{{from_email}}` so you can reply directly.
6. Save the template and note down the **Template ID** (e.g., `template_xyz789`).

## Step 4 — Get Your Public Key

1. Go to **Account** → **General** in the EmailJS dashboard.
2. Find your **Public Key** (e.g., `user_ABCdef123456`).

## Step 5 — Update the Code

Open `src/pages/Contact.js` and find this block (around lines 31–35):

```javascript
emailjs
  .sendForm(
    "YOUR_SERVICE_ID",
    "YOUR_TEMPLATE_ID",
    formRef.current,
    "YOUR_PUBLIC_KEY"
  )
```

Replace the three placeholder strings with your actual credentials:

```javascript
emailjs
  .sendForm(
    "service_abc123",      // ← Your Service ID
    "template_xyz789",     // ← Your Template ID
    formRef.current,
    "user_ABCdef123456"    // ← Your Public Key
  )
```

## Step 6 — Test

1. Start the dev server (`npm start`).
2. Navigate to the **Contact** page.
3. Fill in the form and click **Send Message**.
4. Check your inbox for the email.

## Troubleshooting

| Problem | Solution |
|---|---|
| "Something went wrong" error | Double-check that all three credentials are correct and not wrapped in extra quotes. |
| Email not arriving | Check your spam/junk folder. Verify the **To Email** in your EmailJS template is correct. |
| Gmail blocks sign-in | In EmailJS, use the Gmail OAuth option (not username/password). Enable the Gmail API if prompted. |
| 200 email limit reached | Upgrade your EmailJS plan, or wait for the monthly reset. |

## Security Note

The **Public Key** is safe to include in client-side code — it is designed to be public. Your EmailJS account is protected by domain restrictions. To add an extra layer of security:

1. Go to **Account** → **General** in the EmailJS dashboard.
2. Under **API Settings**, add your domain (e.g., `yourdomain.com`) to the allowed origins list.

This ensures only requests from your deployed site can send emails through your account.
