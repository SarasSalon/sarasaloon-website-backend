const nodemailer = require("nodemailer");

const sendMail = async (req, res) => {

  let transporter = await nodemailer.createTransport({
    host: "mail.sarassalon.com",
    secure: true,
    port: 465,
    logger: true,
    debug: true,
    auth: {
      user: "info@sarassalon.com",
      pass: "sara@SALON123",
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  let info = await transporter.sendMail({
    from: 'info@sarassalon.com',
    to: req.body.email, // list of receivers
    subject: "Booking Confirmed.", // Subject line
    html: `
        <!DOCTYPE html>
        <html>
            <head>
                <title>Appointment</title>
            </head>
            <body>
              <div>
                    <img src="https://sarassalon.com/wp-content/uploads/2023/11/Saras-Beauty-Salon-Logo-01-300x120.png" alt="" width="300">
                    <h2>Booking Confirmation</h2>
                    <p>Dear ${req.body.firstname} ${req.body.lastname} ! Thanks you very much for contacting us regarding your booking dated ${req.body.parentDate}.</p>
                    <p>We will contact on your email ${req.body.email}.</p>
                    <p>In case of any urgent matter, kindly contact us on (845)300-402 or email <a href="https://sarassalon.com/" >info@sarasaloon.com.</a></p>
                    <p>Thanks & Regards</p>
                    <p>Sara Saloon</p>
                    <a href="https://web.facebook.com/people/Saras-Salon-Eyebrow-Threading-Microblading/100040318856179/" target="_blank">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCTxoQuW106YRzYTSxuIEc13ol1YHM740q6QGbITHXoA&s" alt="Facebook Logo" width="50">
                </a>
                <a href="https://www.instagram.com/sara.salon_/?igshid=OGQ5ZDc2ODk2ZA%3D%3D" target="_blank">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/1024px-Instagram-Icon.png" alt="Instagram Logo" width="50">
                </a>
                </div>
            </body>
        </html>
    `,
  });

  console.log("Message sent: %s", info.messageId);

  res.json(info);

};

module.exports = sendMail;
