# Deployment Guide

This guide will walk you through deploying your portfolio website to the web for free using **Vercel** (recommended) or **Netlify**.

## Prerequisites

1.  **GitHub Account**: You need a GitHub account to host your code.
2.  **Git Installed**: Ensure Git is installed on your computer.

## Step 1: Push Code to GitHub

Since you have the code locally, you need to push it to a remote repository.

1.  **Create a New Repository**:
    *   Go to [GitHub.com/new](https://github.com/new).
    *   Name it `portfolio` (or similar).
    *   Make it **Public**.
    *   **Do not** initialize with README or gitignore (we already have them).
    *   Click **Create repository**.

2.  **Push Local Code**:
    Open your terminal in the project folder (`c:\Users\sanke\OneDrive\Documents\Projects\Portfolio`) and run:

    ```bash
    # Initialize git (if not already done)
    git init

    # Add all files
    git add .

    # Commit changes
    git commit -m "Initial commit - Portfolio V1"

    # Link to your new GitHub repo (Replace YOUR_USERNAME with 'Sanket2035')
    git remote add origin https://github.com/Sanket2035/portfolio.git

    # Push to GitHub
    git branch -M main
    git push -u origin main
    ```

## Step 2: Deploy to Vercel (Recommended)

Vercel is the creators of Next.js and provides the best support for React/Vite apps.

1.  Go to [Vercel.com](https://vercel.com) and **Sign Up** with GitHub.
2.  Click **"Add New..."** -> **"Project"**.
3.  You will see your list of GitHub repositories. Find `portfolio` and click **Import**.
4.  **Configure Project**:
    *   **Framework Preset**: Vite (should be auto-detected).
    *   **Root Directory**: `./` (default).
    *   **Build Command**: `npm run build` (default).
    *   **Output Directory**: `dist` (default).
5.  Click **Deploy**.

🎉 **Success!** Your site will be live in less than a minute. Vercel will give you a domain like `portfolio-sanket.vercel.app`.

## Step 3: Custom Domain (Optional)

If you bought a domain (e.g., `sanketshinde.com`):
1.  Go to Vercel Project Settings -> **Domains**.
2.  Enter your domain and follow the DNS configuration instructions.

## Updating Your Site

Whenever you want to update your portfolio:
1.  Make changes locally.
2.  Run:
    ```bash
    git add .
    git commit -m "Update details"
    git push
    ```
3.  Vercel will **automatically** detect the push and redeploy your site!
