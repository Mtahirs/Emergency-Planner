# Emergency Fund Planner

A personalized financial planning tool to help you build a robust financial safety net. Answer a few questions about your finances, risk factors, and personal situation to receive a tailored recommendation for your emergency fund target and an actionable plan to achieve your goal.

## Deployment to GitHub Pages

This project is structured as a single `index.html` file, making it very easy to deploy to any static web host, including GitHub Pages.

### How to Deploy

1.  **Create a new repository** on GitHub.
2.  **Push the `index.html` file** to the repository.
3.  Go to your repository's **Settings** page.
4.  In the left sidebar, click on **Pages**.
5.  Under "Build and deployment", for the **Source**, select **Deploy from a branch**.
6.  Select the `main` (or `master`) branch and the `/ (root)` folder. Click **Save**.
7.  GitHub will build and deploy your site. It might take a few minutes. The URL for your live application will be available on the same page.

**Note:** All other files from the original project (like `.tsx` and `.ts` files) are no longer required for the deployed application to function, as all the code has been consolidated into `index.html`.

## Technology

This project uses [React](https://reactjs.org/) and [Tailwind CSS](https://tailwindcss.com/) (via CDN). It uses [Babel Standalone](https://babeljs.io/docs/en/babel-standalone) to transpile JSX and modern JavaScript directly in the browser. This setup is ideal for simple projects and demos that don't require a separate build step.
