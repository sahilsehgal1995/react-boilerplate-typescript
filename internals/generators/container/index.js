/**
 * Container Generator
 */

const componentExists = require('../utils/componentExists');

module.exports = {
  description: 'Add a container component',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'Form',
      validate: value => {
        if (/.+/.test(value)) {
          return componentExists(value)
            ? 'A component or container with this name already exists'
            : true;
        }
        return 'The name is required';
      },
    },
    {
      type: 'confirm',
      name: 'wantStyledComponents',
      default: false,
      message: 'Do you want styled components for CSS?',
    },
    {
      type: 'confirm',
      name: 'wantHeaders',
      default: false,
      message: 'Do you want headers?',
    },
    {
      type: 'confirm',
      name: 'wantActionsAndReducer',
      default: true,
      message:
        'Do you want an actions/constants/reducer/interface tuple for this container?',
    },
    {
      type: 'confirm',
      name: 'wantEpic',
      default: true,
      message: 'Do you want epics for asynchronous flows? (e.g. fetching data)',
    },
    {
      type: 'confirm',
      name: 'wantMessages',
      default: true,
      message: 'Do you want i18n messages (i.e. will this container use text)?',
    },
    {
      type: 'confirm',
      name: 'wantLoadable',
      default: true,
      message: 'Do you want to load resources asynchronously?',
    },
    {
      type: 'confirm',
      name: 'wantRoute',
      default: true,
      message: 'Do you want a route to be created for the container?',
    },
  ],
  actions: data => {
    // Generate index.tsx and index.test.ts
    var componentTemplate = './container/index.tsx.hbs';

    const actions = [
      {
        type: 'add',
        path: '../../src/containers/{{properCase name}}/index.tsx',
        templateFile: componentTemplate,
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../src/containers/{{properCase name}}/tests/index.test.js',
        templateFile: './container/test.ts.hbs',
        abortOnFail: true,
      },
    ];

    // If Styled components
    if (data.wantStyledComponents) {
      actions.push({
        type: 'add',
        path: '../../src/containers/{{properCase name}}/styles.ts',
        templateFile: './container/styles.ts.hbs',
        abortOnFail: true,
      });
    }

    // If component wants messages
    if (data.wantMessages) {
      actions.push({
        type: 'add',
        path: '../../src/containers/{{properCase name}}/messages.ts',
        templateFile: './container/messages.ts.hbs',
        abortOnFail: true,
      });
    }

    // If they want actions and a reducer, generate actions.ts, constants.ts,
    // reducer.ts and the corresponding tests for actions and the reducer
    if (data.wantActionsAndReducer) {

      // Interface
      actions.push({
        type: 'add',
        path: '../../src/containers/{{properCase name}}/interface.ts',
        templateFile: './container/interface.ts.hbs',
        abortOnFail: true,
      });

      // Actions
      actions.push({
        type: 'add',
        path: '../../src/containers/{{properCase name}}/actions.ts',
        templateFile: './container/actions.ts.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../src/containers/{{properCase name}}/tests/actions.test.ts',
        templateFile: './container/actions.test.ts.hbs',
        abortOnFail: true,
      });

      // Constants
      actions.push({
        type: 'add',
        path: '../../src/containers/{{properCase name}}/constants.ts',
        templateFile: './container/constants.ts.hbs',
        abortOnFail: true,
      });

      // Reducer
      actions.push({
        type: 'add',
        path: '../../src/containers/{{properCase name}}/reducer.ts',
        templateFile: './container/reducer.ts.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../src/containers/{{properCase name}}/tests/reducer.test.ts',
        templateFile: './container/reducer.test.ts.hbs',
        abortOnFail: true,
      });
    }

    // Epics
    if (data.wantEpic) {

      if (!data.wantActionsAndReducer) {
        // Interface
        actions.push({
          type: 'add',
          path: '../../src/containers/{{properCase name}}/interface.ts',
          templateFile: './container/interface.ts.hbs',
          abortOnFail: true,
        });
      }
      actions.push({
        type: 'add',
        path: '../../src/containers/{{properCase name}}/epic.ts',
        templateFile: './container/epic.ts.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../src/containers/{{properCase name}}/tests/epic.test.ts',
        templateFile: './container/epic.test.ts.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../src/containers/{{properCase name}}/api.ts',
        templateFile: './container/api.ts.hbs',
        abortOnFail: true,
      });
    }

    if (data.wantLoadable) {
      actions.push({
        type: 'add',
        path: '../../src/containers/{{properCase name}}/Loadable.ts',
        templateFile: './component/loadable.ts.hbs',
        abortOnFail: true,
      });
    }
    if (data.wantRoute) {
      actions.push({
        type: 'modify',
        pattern: /(\/\/ import:push)/igm,
        path: '../../src/routes.tsx',
        template: `import {{properCase name}} from './containers/{{properCase name}}{{#if wantLoadable}}/Loadable{{/if}}';\n$1`
      },
      {
        type: 'modify',
        pattern: /(\/\/ component:push)/igm,
        path: '../../src/routes.tsx',
        template: `{component: {{properCase name}}, path: '/{{pathCase name}}'},\n    $1`
      });
    }

    actions.push({
      type: 'prettify',
      path: '/containers/',
    });

    return actions;
  },
};
