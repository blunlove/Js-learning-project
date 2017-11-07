let nodemailer = require('nodemailer');
let config = require('./config');

let config_email = config.email;
let transporter = nodemailer.createTransport(config_email);

const sendMail = (recipient, subject, html) => {
    let data = {
        from: config_email.auth.user,
        to: recipient,
        subject: subject,
        html: html
    };
    transporter.sendMail(data, (err, info) => {
        if (err) {
            console.log(err);
        }else {
            console.log("Message sent:" + info.response);
        }
    });
}

exports.sendMail = sendMail;