## Introduction
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) with added features from
[React boilerplate](https://github.com/react-boilerplate/react-boilerplate).<br>
The app uses following third party libraries for scalable, production ready web application.<br>
1. `TypeScript`: The entire project is configured using babel and webpack. Although it supports both  TypeScript and JavaScript but it is highly recommended to use TypeScript in code.
Before installing any package, it is highly recommended to check the typescript version of the package on https://microsoft.github.io/TypeSearch/
2. `Redux store`: For managing and handling state of the app.
3. `Redux-Observable (RxJS)`: Reactive programing paradigm is implemented using RxJS and Epic middleware.<br>Check RxJS operators on https://www.learnrxjs.io
4. `Syled components`: https://www.styled-components.com
5. `React Hooks`: [React hooks](https://github.com/facebookincubator/redux-react-hook) are the future of react applications, by removing react classes and making stateless components. 
6. `Storybook`: Storybook collects all the stateless components and create a style guides. To check all the components created run `yarn storybook`
<br>Fore more info: https://storybook.js.org/examples/
7. `React-Loadable`: Load components and files asynchronously. For more info visit https://github.com/jamiebuilds/react-loadable
8. `Jest`: Unit testing is done through Jest library. By default test files are generated with each component and containers.

## Key Features
The boilerplate is crafted using advanced features of typescript (generics and interfaces) along with strict type restrictions.
Reducers and Epics are injected dynamically while components are loaded asynchronously using loadable. Component, container, language and other related files are generated through [Plop](https://plopjs.com) generator<br>
Constants, reducer functions, actions and routes are generated using helper functions. For more information run `yarn generate` and try generating few components and generators.

## Available Scripts

In the project directory, you can run the following commands using NPM or yarn but it is highly recommended to use yarn.

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn generate`

Launches the generator for generating files interactively.<br>
It provides you options to generate component, container, component inside a container and add new language.<br>
Further options of adding style-components, epic, reducer, actions, constants, loadable (for loading component asynchronously) are provided. 

### `yarn test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn lint`

All the files are tracked under TsLint rules. Linting is tested while git commit. Please do not skip linting in any case.

### `yarn storybook`

Collects all the default stateless components generated and by default host them on http://localhost:9009

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
