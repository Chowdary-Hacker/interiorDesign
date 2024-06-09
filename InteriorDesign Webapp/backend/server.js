const express = require('express');
const nodemailer = require('nodemailer');
const {google} =  require('googleapis');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

const CLIENT_ID = "625313001546-l3ddjr1g21rkbmgs8uo80i07fmtb3i7b.apps.googleusercontent.com";
const CLIENT_SECRET = "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";
const REDIRECT_URI = "https://developers.google.com/oauthplayground";
const REFRESH_TOKEN = '1//04lYQqg6UZRWJCgYIARAAGAQSNwF-L9IrpsOHI4MslrLSv97YUcSq8fKnAHvGgalwH1EIvPed7jbtNiRFLT0Bt4ha3RsMlK79mKc';

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
oAuth2Client.setCredentials({refresh_token: REFRESH_TOKEN});

app.post('/send-email', async (req, res) => {
  const { message, email } = req.body;

      const accessToken = await oAuth2Client.getAccessToken();
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth:{
            type:'OAuth2',
            user:'mohantechnicalmail@gmail.com',
            clientId: CLIENT_ID,
            clientSecret: CLIENT_SECRET,
            refreshToken: REFRESH_TOKEN,
            accessToken: accessToken
        }
      })

      const mailOptions = {
        from: 'Customer', 
        to: 'vaddemsai@gmail.com', 
        subject: 'New Query from the customer', 
        html:'<h1>Hello this message is from Customer of email : '+email+' using gmail api </h1> <p>'+message+'</p>'
      };


  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Error sending email');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
