// functions/sendEmail.js
const sgMail = require('@sendgrid/mail');

exports.handler = async (event, context) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  
  const formData = JSON.parse(event.body);
  const { rating, feedback } = formData.payload.data;

  const emailContent = {
    to: 'info@qbmedia.co.il',
    from: 'your-email@example.com', // Use a verified sender email address
    subject: 'تقييم خدمة العملاء جديد',
    text: `التقييم: ${rating}\nالملاحظات: ${feedback}`,
  };

  try {
    await sgMail.send(emailContent);
    return { statusCode: 200, body: 'Email sent successfully' };
  } catch (error) {
    return { statusCode: error.code, body: error.message };
  }
};
