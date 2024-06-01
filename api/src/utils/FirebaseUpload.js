const admin = require("firebase-admin");
const credentials = require("./credentials.json");
const fs = require("fs");

admin.initializeApp({
  credential: admin.credential.cert(credentials),
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
