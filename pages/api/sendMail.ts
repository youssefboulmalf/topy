import type { NextApiRequest, NextApiResponse } from "next";
import { confirmationMail } from "../../assets/mail/confirmation";
import {ProductType, GroupMember} from '../../types'

export default (req: NextApiRequest, res: NextApiResponse) => {
  const type = req.body.type;

  let nodemailer = require("nodemailer");

  var transporter = nodemailer.createTransport({
    host: "smtp.sendgrid.net",
    port: 587,
    auth: {
      user: "apikey",
      pass: process.env.SG_KEY,
    },
  });

  if (type == "enquiry") {
    const order = req.body.order;
    const { orderDetails } = order;
    const customer = orderDetails.groupInfo[0];
    const packages = orderDetails.items.map((item: ProductType) => {
      return `<tr><td>${item.name}</td> <td>$ ${item.price}</td> <td> ${item.date}</td> <td>${item.count}</td></tr>`;
    });
    const info = orderDetails.groupInfo.map((member: GroupMember ) => {
      return `<tr><td>${member.firstName}</td> <td> ${member.lastName}</td> <td> ${member.nationality}</td> <td> ${member.age}</td> <td> ${member.email}</td> <td>${member.phone}</td></tr>`;
    });

    const memberlist = info.join("\n");
    const itemsList = packages.join("\n");

    const Itemtable = `<table style="width:100%">
        <tr>
          <td>Package</td>
          <td>Price</td>
          <td>Date</td>
          <td>Count</td>
        </tr>
        ${itemsList}
      </table>
      `;
    const customerInfo = `
      <tr>
      <td>First name</td>
      <td>Last name</td>
      <td>Age</td>
      <td>Nationality</td>
      <td>Email</td>
      <td>Phone</td>
    </tr>
    ${memberlist}
  </table>
  
      `;


      let message = `<body><div style="margin-bottom:60px">New enquiry from ${customer.firstName} ${customer.lastName}</div><div>Customer info:</div><div style="margin-bottom:60px">${customerInfo}</div><div>Booking info:</div>${Itemtable}<divstyle="margin-top:20px">Totalprice: ${order.totalPrice}</div></body>`;
    const html = `<!DOCTYPE html>
    <html
      lang="en"
      xmlns:o="urn:schemas-microsoft-com:office:office"
      xmlns:v="urn:schemas-microsoft-com:vml"
    >
      <head>
        <title></title>
        <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <!--[if mso
          ]><xml
            ><o:OfficeDocumentSettings
              ><o:PixelsPerInch>96</o:PixelsPerInch
              ><o:AllowPNG /></o:OfficeDocumentSettings></xml
        ><![endif]-->
        <style>
        table, th, td {
          border: 1px solid;
        }
        </style>
      </head>${message}</html>`


    const mailDataCutomer = {
      from: "info.topytours@gmail.com",
      to: customer.email,
      subject: `Booking confirmation ${order.id}`,
      text: "confirmation",
      html: confirmationMail,
    };

    const mailData = {
      from: "info.topytours@gmail.com",
      to: "info.topytours@gmail.com",
      subject: `New enquiry ${order.id}`,
      text: message,
      html: html,
    };

    transporter.sendMail(mailDataCutomer, function (err: any, _info: any) {
      if (err) {
        console.log(err);
        return res.status(400).send({ error: err });
      } else {
        return res.status(200).send("succes");
      }
    });

    transporter.sendMail(mailData, function (err: any, _info: any) {
      if (err) {
        console.log(err);
        return res.status(400).send({ error: err });
      } else {
        return res.status(200).send("succes");
      }
    });
  }

  if (type == "contact") {
    const { name, email, message } = req.body;
    const mailData = {
      from: "info.topytours@gmail.com",
      to: "info.topytours@gmail.com",
      subject: `Message From ${name}`,
      text: message,
      html: `<div>${message}</div> <br><br> reply to,<br> ${email}`,
    };
    transporter.sendMail(mailData, function (err: any, _info: any) {
      if (err) {
        console.log(err);
        return res.status(400).send({ error: err });
      } else {
        return res.status(200).send("succes");
      }
    });
  }
};
