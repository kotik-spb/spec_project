const nodemailer = require("nodemailer");

class MailService {
  constructor() {
    this.transporter = nodemailer.createTransport({
      port: process.env.SMTP_PORT,
      host: process.env.SMTP_HOST,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });

    this.transporter.verify((err) => {
      if (err) {
        throw new Error("Ошибка при верификации SMTP соединения", {cause: err})
      }
      else {
        console.log("SMTP successfully connected!");
      }
    })
  }

  async sendActivationLink({email, firstName, lastName, activationUid}) {
    const message = {
      from: process.env.SMTP_USER,
      to: email,
      subject: "Активация акаунта на Social Network",
      html: `
        <!doctype html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              a {
                text-decoration: none;
                font-weight: bold;
                border: 3px solid transparent;
              }

              a:hover {
                border-color: #000;
                transition: all 1s ease-in;
              }

              .activate_link {
                color: darkpurple;
              }
            </style>
          </head>
          <body>
            <h3>Здравствуйте, ${firstName} ${lastName}</h3>
            <p>Ваша электронная почта была указана при регистрации на сайте <strong><a href="${process.env.CLIENT_URL}">Social Network</a></strong>.</p>
            <p>Если это были вы, пожалуйста, щелкните <a class="activate_link" href="${process.env.SERVER_URL}/api/user/activate/${activationUid}">здесь</a> для активации аккаунта.</p>
          </body>
        </html>
      `
    };

    await this.transporter.sendMail(message);
  }
}

module.exports = new MailService();