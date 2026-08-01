import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Email to student after payment
export const sendStudentPaymentEmail = async ({
  studentName,
  studentEmail,
  planTitle,
  amount,
  paymentId,
}) => {
  const mailOptions = {
    from: `"Satyam Mentorship" <${process.env.EMAIL_USER}>`,
    to: studentEmail,
    subject: `✅ Payment Confirmed — ${planTitle}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0f0f0f; color: #ffffff; border-radius: 12px; overflow: hidden;">
        <div style="background: linear-gradient(135deg, #facc15, #f59e0b); padding: 30px; text-align: center;">
          <h1 style="margin: 0; color: #000; font-size: 28px;">🎉 Payment Successful!</h1>
        </div>
        <div style="padding: 30px;">
          <p style="font-size: 18px;">Hi <strong>${studentName}</strong>,</p>
          <p style="color: #ccc;">Your payment has been received and your plan is now <strong style="color: #facc15;">active</strong>!</p>

          <div style="background: #1a1a1a; border: 1px solid #333; border-radius: 8px; padding: 20px; margin: 20px 0;">
            <h3 style="color: #facc15; margin-top: 0;">📋 Payment Details</h3>
            <p style="margin: 8px 0;">📦 <strong>Plan:</strong> ${planTitle}</p>
            <p style="margin: 8px 0;">💰 <strong>Amount Paid:</strong> ₹${amount}</p>
            <p style="margin: 8px 0;">🔖 <strong>Payment ID:</strong> ${paymentId}</p>
          </div>

          <div style="background: #1a1a1a; border: 1px solid #facc15; border-radius: 8px; padding: 20px; margin: 20px 0;">
            <h3 style="color: #facc15; margin-top: 0;">📞 Next Steps</h3>
            <p style="color: #ccc; margin: 0;">Satyam will contact you within <strong>24 hours</strong> on your registered email/WhatsApp to get you started.</p>
          </div>

          <p style="color: #888; font-size: 13px; margin-top: 30px;">If you have any questions, feel free to reach out at <a href="mailto:satyamsinghiit@gmail.com" style="color: #facc15;">satyamsinghiit@gmail.com</a></p>
        </div>
        <div style="background: #1a1a1a; padding: 15px; text-align: center; color: #555; font-size: 12px;">
          © 2026 Satyam Mentorship • IIT Kharagpur
        </div>
      </div>
    `,
  };

  await transporter.sendMail(mailOptions);
};

// Email to mentor (Satyam) after payment
export const sendMentorNotificationEmail = async ({
  studentName,
  studentEmail,
  studentPhone,
  planTitle,
  amount,
  paymentId,
}) => {
  const mailOptions = {
    from: `"MentorLink Payments" <${process.env.EMAIL_USER}>`,
    to: process.env.MENTOR_EMAIL || "satyamsinghiit@gmail.com",
    subject: `💰 New Payment — ${studentName} enrolled in ${planTitle}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0f0f0f; color: #ffffff; border-radius: 12px; overflow: hidden;">
        <div style="background: linear-gradient(135deg, #facc15, #f59e0b); padding: 30px; text-align: center;">
          <h1 style="margin: 0; color: #000; font-size: 28px;">💰 New Student Payment!</h1>
        </div>
        <div style="padding: 30px;">
          <p style="font-size: 18px;">New student has enrolled in your mentorship!</p>

          <div style="background: #1a1a1a; border: 1px solid #333; border-radius: 8px; padding: 20px; margin: 20px 0;">
            <h3 style="color: #facc15; margin-top: 0;">👤 Student Details</h3>
            <p style="margin: 8px 0;">👦 <strong>Name:</strong> ${studentName}</p>
            <p style="margin: 8px 0;">📧 <strong>Email:</strong> ${studentEmail}</p>
            <p style="margin: 8px 0;">📱 <strong>Phone:</strong> ${studentPhone || "—"}</p>
          </div>

          <div style="background: #1a1a1a; border: 1px solid #facc15; border-radius: 8px; padding: 20px; margin: 20px 0;">
            <h3 style="color: #facc15; margin-top: 0;">📋 Payment Details</h3>
            <p style="margin: 8px 0;">📦 <strong>Plan:</strong> ${planTitle}</p>
            <p style="margin: 8px 0;">💰 <strong>Amount:</strong> ₹${amount}</p>
            <p style="margin: 8px 0;">🔖 <strong>Payment ID:</strong> ${paymentId}</p>
          </div>

          <p style="color: #facc15; font-weight: bold;">⚡ Contact the student within 24 hours to begin mentorship!</p>
        </div>
        <div style="background: #1a1a1a; padding: 15px; text-align: center; color: #555; font-size: 12px;">
          © 2026 Satyam Mentorship • IIT Kharagpur
        </div>
      </div>
    `,
  };

  await transporter.sendMail(mailOptions);
};
