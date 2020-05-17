// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig :{
  apiKey: "AIzaSyAjfHBn7D7FvlR0a_ykXnHpYrTWvpTpsJw",
  authDomain: "happy-place-50bae.firebaseapp.com",
  databaseURL: "https://happy-place-50bae.firebaseio.com",
  projectId: "happy-place-50bae",
  storageBucket: "happy-place-50bae.appspot.com",
  messagingSenderId: "385963166900",
  appId: "1:385963166900:web:07e93d8efdb742f6719be1",
  measurementId: "G-6ZWCZF1SFC"
}
}
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

// 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
// import * as functions from 'firebase-functions';
// import * as admin from 'firebase-admin';
// admin.initializeApp();
// const db = admin.firestore();

// import * as sgMail from '@sendgrid/mail';
// import { async } from 'q';
// const API_KEY = functions.config().sendgrid.key;
// const TEMPLATE_ID = functions.config().sendgrid.template;
// sgMail.setApiKey(API_KEY);

// export const genericEmail = functions.https.onCall(async(data,context)=>{
//     if (!context.auth && !context.auth.token.email){
//         throw new  functions.https.HttpsError('failed-precondition','Must be logged in');
//     }
//     const msg= {
//         to: context.auth.token.email,
//         from: 'happyplace0811@gmail.com',
//         templateId : TEMPLATE_ID,
//         dynamic_template_data: {
//             subject: data.subject,
//             name: data.text
//         }
//     };
//     await sgMail.send(msg);
//     return {success:true};
// })

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
