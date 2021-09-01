# dougs-site sumamry

## Details
My father wrote his memoir and wants to have a site that will show photos that align to parts of the book.  The site will also host the ebook for downloads.  He doesn't want it freely published for anyone to get, so it's currently behind a password protected route.

## Setup
This was setup with Create React App.  'npm start' to run locally.  'npm run build' to build a version to serve.
This site is setup with CI/CD to Firebase to deploy on merge to main branch.
This site requires a 'REACT_APP_PASSWORD' variable to be set.  Access to download the ebook is controlled by this password.  The ebook is not being sold and does not contain sensitive material, so this low-level security is suffcient to work as a gatekeeper for only providing the book out to those who are interested.
