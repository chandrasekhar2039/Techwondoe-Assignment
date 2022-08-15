# Assignment

### Non Functional Requirements

- [x] Each section of the homepage must be a separate react component.
- [x] Must develop using Typescript
- [x] Muse use tailwindcss
- [x] No hardcoding of text in react app. All the content (text and images) must be coming from a Headless CMS through its API
- [x] Enable theming with just 2 colors i.e primary and secondary and font family
- [x] Create Typography components for H1, H2, and Paragraph
- [ ] Use Storybook for 3 UI components
  - [x] Button - Primary and secondary
  - [ ] Typography - H1, H2, Paragraph
  - [ ] Sub-component of the Why Choose us section with icon, title and paragraph.
- [x] Prettier and Linter configuration
- [x] Host the page on Netlify, Vercel or another provider.
- [x] Readme file on how to deploy and run the service.
- [x] Add a checklist of the above items on ReadMe and check all the items before submitting the assignment.

#### Additional Functionality Added

- [x] Dark Mode/Light mode switcher

**Live**: [Vercel](https://techwondoe-assignment-five.vercel.app/)

## Steps to run and deploy.

#### Run on local

1. Signup for headless CMS like [contentful](https://www.contentful.com/).
2. Get your Space id and Access Token from contentful.
3. Create a `.env` file with following configuration

```
REACT_APP_SPACEID=<ENTER YOUR SPACEID>
REACT_APP_API_KEY=<ENTER YOUR ACCESS TOKEN>

```

4. Then run

```
1. npm i
2. npm start

```

5. The application will run at port 3000 on your local.

#### Deploy

1. Get your `env` variables and set them in the host provider environment variables section.
2. Fork the repo and get all the latest code to the host provider.
3. use the default commands `npm i` and `npm run build` to install and build production files to deploy.
4. After its done go and check the preview URL.
