const nodemailer = require("nodemailer");

let mailOptions = {
  from: "",
  to: "",
  subject: "",
  text: "",
};

const htmlTemplate = (data) => {
  const output = `
  <p>Someone contacted you through your portfolio page!</p>
  <h3>Contact Details</h3>
  <ul>
    <li>Name: ${data.name}</li>
    <li>Email: ${data.email}</li>
    <li>Phone: ${data.phone}</li>
  </ul>
  <h3>Message</h3>
  <p>Subject: ${data.subject}</p>
  <p>Message: ${data.message}</p>
`;
  return output;
};

export default async (req, res) => {
  const body = JSON.parse(req.body);
  console.log(body);
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_EMAIL,
      pass: process.env.GMAIL_APP_PASS,
    },
  });

  const htmlOutput = htmlTemplate(body);

  const mailOptions = {
    from: "Personal Portfolio <portfoliomessage0@gmail.com>",
    to: "pandyasourav38@gmail.com",
    subject: `IMPORTANT! You got a message!`,
    // text: `Name: ${body.name}\nPhone: ${body.phone}\n\n\n ${body.message}`,
    html: htmlOutput,
  };

  console.log(body.email);

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send("error");
    } else {
      console.log("Email sent: " + info.response);
      res.send("success");
    }
  });
};
