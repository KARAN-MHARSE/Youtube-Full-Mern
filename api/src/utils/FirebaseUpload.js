const admin = require("firebase-admin");
const credentials = require("./credentials.json");
const fs = require("fs");

// admin.initializeApp({
//   credential: admin.credential.cert(credentials),
//   storageBucket: "gs://clone-86b13.appspot.com",
// });

const serviceAccount = {
  type: process.env.type,
  project_id: process.env.project_id,
  private_key_id: process.env.private_key_id,
  private_key: process.env.private_key,
  client_email: process.env.client_email,
  client_id: process.env.client_id,
  auth_uri: process.env.auth_uri,
  token_uri: process.env.token_uri,
  auth_provider_x509_cert_url: process.env.auth_provider_x509_cert_url,
  client_x509_cert_url: process.env.client_x509_cert_url,
  universe_domain: process.env.universe_domain,
};

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: "gs://clone-86b13.appspot.com",
});

const bucket = admin.storage().bucket();

const uploadToFirebase = async (filePath, bucketName) => {
  // console.log(filePath);
  const videoRef = bucket.file(`${bucketName}/${filePath.originalname}`);
  const stream = fs.createReadStream(filePath.path);

  await videoRef.save(stream);

  const signedUrl = await videoRef.getSignedUrl({
    action: "read",
    expires: "03-09-2491",
  });
  return signedUrl[0];
};

module.exports = { uploadToFirebase };
