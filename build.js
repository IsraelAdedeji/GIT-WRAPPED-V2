const fs = require('fs');

// Read the token from Vercel's environment variables
const token = process.env.GITHUB_TOKEN;

if (!token) {
    console.warn('⚠️ WARNING: GITHUB_TOKEN is not set. The app will not work in production.');
    // Fallback for local testing if someone runs "npm run build" locally without the env var
    fs.writeFileSync('config.js', `const GITHUB_TOKEN = 'YOUR_GITHUB_TOKEN_HERE';\n`);
} else {
    console.log('✅ GITHUB_TOKEN found. Generating config.js...');
    fs.writeFileSync('config.js', `const GITHUB_TOKEN = '${token}';\n`);
    console.log('✅ config.js generated successfully.');
}