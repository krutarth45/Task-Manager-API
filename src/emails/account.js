const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "krutarth.798@gmail.com",
    subject: "Thanks for Joining In!",
    text: `Welcome to the App ${name}`,
  });
};

const sendFarewellEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "krutarth.798@gmail.com",
    subject: `We will miss you ${name}`,
    text: `${name}, we would be very grateful to know why you are leaving our platform.`,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendFarewellEmail,
};
