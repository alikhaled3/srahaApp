 import nodemailer from 'nodemailer'
import { htmlCode } from './html.js';
import  jwt  from 'jsonwebtoken';
export const sendEmail =async (options)=>{

const transporter = nodemailer.createTransport({
    service:'gmail',
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: 'alikhaledomar12@gmail.com',
      pass: 'ekltzoffzupmemyv'
    }
  });
  let token =jwt.sign({email:options.email},'alikhaeld3')
  const info = await transporter.sendMail({
    from: '"Fred Foo 👻" <alikhaledomar10@gmail.com>', // sender address
    to: options.email, // list of receivers
    subject: "Hello ✔", // Subject line
    html: htmlCode(`http://localhost:3000/veriefy/${token}`), // html body
  });

  console.log("Message sent: %s", info.messageId);


}

