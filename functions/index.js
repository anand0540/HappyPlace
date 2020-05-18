const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
admin.initializeApp()
require('dotenv').config()

const { SENDER_EMAIL, SENDER_PASSWORD } = process.env;

exports.sendEmailNotification = functions.firestore.document('acceptedBooking/{id}')
    .onCreate((snap, ctx) => {
        const data = snap.data();
        let authData = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: SENDER_EMAIL,
                pass: SENDER_PASSWORD
            }
        });
        authData.sendMail({
            from: 'happyplace0811@gmail.com',
            to: `${data.email}`,
            subject: 'Booking Accepted',
            text: `${data.email}`,
            html:  `
            
                        <div style="background-image: linear-gradient(to top right, #12515E, black);">
                            <div style="padding:30px">
                                <p style="font-size: 50px !important; color:#ffbe00 !important; margin-left:260px !important;">Happy Place</p>
                                    <p style="color:#fff;font-size:16;line-height:18px" > Dear ${data.name},</p><br/> 
                                    <p style="color:#fff;font-size:28;font-weight:600; line-height:22px">We are happy to inform that your booking of Two Seater: <i style="color:red">${data.twoSeater} </i> , Four Seater: <i style="color:red">${data.fourSeater} </i> , Eight Seater: <i style="color:red">${data.eightSeater} </i>  for <i style="color:red">${data.date} - ${data.time} </i>  has been accepted.</p> <br/>
                                    <p style="color:#fff;font-size:16; line-height:18px">From the happiest place</p>
                            </div>
                        </div>
                    `
          
        }).then(res => console.log('successfully sent that mail')).catch(err => console.log(err));
    });
exports.sendCancelBookingNotification = functions.firestore.document('declineBooking/{id}')
    .onCreate((snap, ctx) => {
        const data = snap.data();
        let authData = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: SENDER_EMAIL,
                pass: SENDER_PASSWORD
            }
        });
        authData.sendMail({
            from: 'happyplace0811@gmail.com',
            to: `${data.email}`,
            subject: 'Booking Declined',
            text: `${data.email}`,
            html: `
                   
            <div style="background-image: linear-gradient(to top right, #12515E, black);">
            <div style="padding:30px">
                <p style="font-size: 50px !important; color:#ffbe00 !important; margin-left:260px !important;">Happy Place</p>
                    <p style="color:#fff;font-size:16;line-height:18px" > Dear ${data.name},</p><br/> 
                    <p style="color:#fff;font-size:28;font-weight:600; line-height:22px">We are sorry to inform that your booking of Two Seater: <i style="color:red">${data.twoSeater} </i> , Four Seater: <i style="color:red">${data.fourSeater} </i> , Eight Seater: <i style="color:red">${data.eightSeater} </i>  for <i style="color:red">${data.date} - ${data.time} </i>  has been declined. Please try again after sometime.</p> <br/>
                    <p style="color:#fff;font-size:16; line-height:18px">From the happiest place</p>
            </div>
        </div>
                    `
        }).then(res => console.log('successfully sent that mail')).catch(err => console.log(err));
    });

exports.sendAcceptedOrderNotification = functions.firestore.document('acceptedOrders/{id}')
    .onCreate((snap, ctx) => {
        const data = snap.data();
        let authData = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: SENDER_EMAIL,
                pass: SENDER_PASSWORD
            }
        });
        authData.sendMail({
            from: 'happyplace0811@gmail.com',
            to: `${data.email}`,
            subject: 'Order Accepted',
            text: `${data.email}`,
            html: `
            
                        <div style="background-image: linear-gradient(to top right, #12515E, black);">
                            <div style="padding:30px">
                                <p style="font-size: 50px !important; color:#ffbe00 !important; margin-left:260px !important;">Happy Place</p>
                                    <p style="color:#fff;font-size:16;line-height:18px" > Dear ${data.firstName},</p><br/> 
                                    <p style="color:#fff;font-size:28;font-weight:600; line-height:22px">We are happy to inform that your order of <i style="color:red">${data.fOrder} </i> has been accepted. Please keep &#8377; <i style="color:red">${data.amount} </i> ready.</p> <br/>
                                    <p style="color:#fff;font-size:16; line-height:18px">From the happiest place</p>
                            </div>
                        </div>
                    `
        }).then(res => console.log('successfully sent that mail')).catch(err => console.log(err));
    });
exports.sendDeclinedOrderNotification = functions.firestore.document('declineOrders/{id}')
    .onCreate((snap, ctx) => {
        const data = snap.data();
        let authData = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: SENDER_EMAIL,
                pass: SENDER_PASSWORD
            }
        });
        authData.sendMail({
            from: 'happyplace0811@gmail.com',
            to: `${data.email}`,
            subject: 'Order Declined',
            text: `${data.email}`,
            html: `
                    <div style="background-image: linear-gradient(to top right, #12515E, black);">
                        <div style="padding:30px">
                            <p style="font-size: 50px !important; color:#ffbe00 !important; margin-left:260px !important;">Happy Place</p>
                                <p style="color:#fff;font-size:16;line-height:18px" > Dear ${data.firstName},</p><br/> 
                                <p style="color:#fff;font-size:28;font-weight:600; line-height:22px">We are sorry to inform that your order of <i style="color:red">${data.fOrder} </i> has been declined. Please try again after some time.</p> <br/>
                                <p style="color:#fff;font-size:16; line-height:18px">From the happiest place</p>
                        </div>
                    </div>
                    `
        }).then(res => console.log('successfully sent that mail')).catch(err => console.log(err));
    });






// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
