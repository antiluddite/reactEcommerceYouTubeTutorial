Answer
Redirect component has been removed from the react-router version 6.

From the the github of react-router:

Redirect (and redirectTo in useRoutes) was removed.

We no longer support redirecting on the initial render, due to compatibility issues with future versions of React React won’t let us change the state in an ancestor component on the initial render w/out warning, so we had to remove the component, as well as the ability to do a navigate() on the initial render. You can still render a , but it won’t actually update the page until the next render.

For more details, see: react-router v6.0.0-alpha.3

If you want to use Redirect component, you will have to use react router version 5.





bootstrap may want to be react-bootstrap.
After several tests this is my conclusion for running bootstrap v4.0.0-beta with Webpack so you will need to manually install jquery and popper.js, it will not be installed by bootstrap as dependencies anymore. It will not work without jquery and the dropdowns/popups will not work without popper.js so:

npm install bootstrap@4.0.0-beta -D
npm install jquery -D
npm install popper.js -D
I ended up editing the post, because it was pointed out that popper and popper.js are 2 different libraries(which I didn't knew) I was trying to install popper.js with npm install popper and therefore I had the issue... so installing it with npm install popper.js will install the latest version of it (and the right library). Then you have to change in the webpack.config.js just as mentioned in https://getbootstrap.com/docs/4.0/getting-started/webpack/