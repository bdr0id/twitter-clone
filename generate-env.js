const fs = require("fs");
const path = require("path");
const dotenv = require("dotenv");

const result = dotenv.config();

if (result.error) {
  console.error("❌ Error loading .env file");
  process.exit(1);
}

const env = result.parsed;

function firebaseConfig(env) {
  return `{
    apiKey: '${env.FIREBASE_API_KEY}',
    authDomain: '${env.FIREBASE_AUTH_DOMAIN}',
    databaseURL: '${env.FIREBASE_DATABASE_URL}',
    projectId: '${env.FIREBASE_PROJECT_ID}',
    storageBucket: '${env.FIREBASE_STORAGE_BUCKET}',
    messagingSenderId: '${env.FIREBASE_MESSAGING_SENDER_ID}',
    appId: '${env.FIREBASE_APP_ID}'
  }`;
}

const devEnvContent = `export const environment = {
  production: false,
  firebase: ${firebaseConfig(env)}
};
`;

fs.writeFileSync(
  path.resolve(__dirname, "src/environments/environment.ts"),
  devEnvContent,
);
console.log("✅ Generated src/environments/environment.ts");

if (env.PRODUCTION === "true") {
  const prodEnvContent = `export const environment = {
    production: true,
    firebase: ${firebaseConfig(env)}
  };
  `;
  fs.writeFileSync(
    path.resolve(__dirname, "src/environments/environment.prod.ts"),
    prodEnvContent,
  );
  console.log("✅ Generated src/environments/environment.prod.ts");
}
