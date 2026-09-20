# GitWrapped
GitWrapped is a web based software inspired by the Spotify Wrapped application. It takes a valid github username as input, fetches live data over the github REST API and displays it in a easy to understand slide format.

It includes a heatmap that displays all the users work over the past 90 days, an arch-type generator based on the type of person the algorithm can infer they are from their GitHub account, downloadable share card and other interesting features.

This project used vanilla HTML, CSS and JavaScript for frontend development, the GitHub REST API and the html2canvas library for the downloadable share card.

## How to run locally
In case you want to run it locally, here are the steps you should follow:
1. Clone the Repo
2. Create a config.js file in the root directory
3. Add your GitHub token: `const GITHUB_TOKEN = 'your_token';`
4. Run index.html in your browser/live server

## Images

<img width="694" height="613" alt="Screenshot 2026-09-20 143317" src="https://github.com/user-attachments/assets/98411fdf-53e7-4475-b339-72c6bd95ef79" />

<img width="795" height="519" alt="Screenshot 2026-09-20 143415" src="https://github.com/user-attachments/assets/a9b6cc37-f1df-4484-b2d1-7f1d57057c4e" />

<img width="416" height="422" alt="Screenshot 2026-09-20 143809" src="https://github.com/user-attachments/assets/f8197c86-613c-41e5-a554-6686e186ac12" />

## Try the Live Demo Here: https://git-wrapped-v2.vercel.app/
