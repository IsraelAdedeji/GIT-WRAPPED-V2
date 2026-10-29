# GitWrapped
GitWrapped is a web based software inspired by the Spotify Wrapped application. It takes a valid github username as input, fetches live data over the github REST API and displays it in a easy to understand slide format.

It includes a heatmap that displays all the users work over the past 90 days, an arch-type generator based on the type of person the algorithm can infer they are from their GitHub account, downloadable share card and other interesting features.

This project used vanilla HTML, CSS and JavaScript for frontend development, the GitHub REST API and the html2canvas library for the downloadable share card.

I built this so I could check out as well as share my github profile in a fun and interactive way with other builders.

## How to run locally
In case you want to run it locally, here are the steps you should follow:
1. Clone the Repo
2. Create a config.js file in the root directory
3. Add your GitHub token: `const GITHUB_TOKEN = 'your_token';`
4. Run index.html in your browser/live server

## Images

<img width="1324" height="658" alt="Screenshot 2026-10-29 193912" src="https://github.com/user-attachments/assets/f50d66c3-bd37-4fc1-b6b1-030b8c944a0f" />

<img width="869" height="549" alt="Screenshot 2026-10-29 193418" src="https://github.com/user-attachments/assets/3ca4dd02-894b-498f-8243-3c9853981fd0" />

<img width="1309" height="601" alt="Screenshot 2026-10-29 125848" src="https://github.com/user-attachments/assets/cdaa22f5-2740-4cef-bcd6-b354a4cabeea" />

## Try the Live Demo Here: https://git-wrapped-v2.vercel.app/
