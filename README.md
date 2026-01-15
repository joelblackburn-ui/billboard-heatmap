# Billboard Heatmap Viewer

A simple web application to visualize HubSpot engagement data for Billboard companies in an interactive heatmap format.

## What is this?

This application displays a heatmap visualization of engagement activities (emails, meetings, calls, tasks) across various Billboard companies. The heatmap provides insights into which companies have the most engagement activity and when that activity occurred.

## Features

- Interactive heatmap with color-coded engagement intensity
- Hover tooltips showing detailed engagement counts
- Responsive design that works on desktop and mobile
- Simple Express.js server for easy deployment

## Local Development

1. Install dependencies:
```bash
npm install
```

2. Start the server:
```bash
npm start
```

3. Open your browser to `http://localhost:3000`

## Deployment

This application is designed to be easily deployed to platforms like Railway, Heroku, or Vercel.

### Railway Deployment

1. Install Railway CLI or use the web interface
2. Connect this directory to a new Railway project
3. Railway will automatically detect the Node.js app and deploy it
4. The `PORT` environment variable is automatically configured by Railway

## Technical Details

- Built with Express.js for serving static files
- Uses vanilla JavaScript for the heatmap visualization
- No build step required - just install and run
- Configured to use Railway's dynamic PORT assignment

## File Structure

- `index.js` - Express server that serves the heatmap
- `heatmap.html` - The interactive heatmap visualization
- `package.json` - Node.js dependencies and configuration
