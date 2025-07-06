const fs = require("fs");
const path = require("path");

const requiredVars = [
  "FIREBASE_API_KEY",
  "FIREBASE_AUTH_DOMAIN",
  "FIREBASE_DATABASE_URL",
  "FIREBASE_PROJECT_ID",
  "FIREBASE_STORAGE_BUCKET",
  "FIREBASE_MESSAGING_SENDER_ID",
  "FIREBASE_APP_ID",
  "PRODUCTION",
];

for (const key of requiredVars) {
  if (!process.env[key]) {
    console.error(`❌ Missing environment variable: ${key}`);
    process.exit(1);
  }
}

const firebaseConfig = `{
  apiKey: '${process.env.FIREBASE_API_KEY}',
  authDomain: '${process.env.FIREBASE_AUTH_DOMAIN}',
  databaseURL: '${process.env.FIREBASE_DATABASE_URL}',
  projectId: '${process.env.FIREBASE_PROJECT_ID}',
  storageBucket: '${process.env.FIREBASE_STORAGE_BUCKET}',
  messagingSenderId: '${process.env.FIREBASE_MESSAGING_SENDER_ID}',
  appId: '${process.env.FIREBASE_APP_ID}'
}`;

const envFolder = path.resolve(__dirname, "src/environments");
if (!fs.existsSync(envFolder)) fs.mkdirSync(envFolder, { recursive: true });

const devContent = `export const environment = {
  production: false,
  firebase: ${firebaseConfig}
};`;

fs.writeFileSync(path.join(envFolder, "environment.ts"), devContent);
console.log("✅ Created environment.ts");

if (process.env.PRODUCTION === "true") {
  const prodContent = `export const environment = {
    production: true,
    firebase: ${firebaseConfig}
  };`;
  fs.writeFileSync(path.join(envFolder, "environment.prod.ts"), prodContent);
  console.log("✅ Created environment.prod.ts");
}
