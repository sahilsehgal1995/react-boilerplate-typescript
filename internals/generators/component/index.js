/**
 * Component Generator
 */

/* eslint strict: ["off"] */

'use strict';

const componentExists = require('../utils/componentExists');
const containersList = require('../utils/containersList');

module.exports = {
  description: 'Add an unconnected component',
  prompts: [
    {
      when: function () {
        return containersList.length>0;
      },
      type: 'confirm',
      name: 'wantInsideContainer',
      default: false,
      message: 'Do you want this inside an existing container?',
    },
    {
      when: function (response) {
        return response.wantInsideContainer;
      },
      type: 'list',
      name: 'containerName',
      choices: containersList,
      message: 'Select a container to inject?'
    },
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'Button',
      validate: (value, data) => {
        if (/.+/.test(value)) {
          return componentExists(value, data)
            ? `A component with this name already exists in ${data.containerName}`
            : true;
        }
        return 'The name is required';
      },
    },
    {
      type: 'confirm',
      name: 'wantStyledComponents',
      default: true,
      message: 'Do you want styled components for CSS?',
    },
    {
      type: 'confirm',
      name: 'wantStoryBook',
      default: true,
      message: 'Do you want to create default storybook?',
    },
    {
      type: 'confirm',
      name: 'wantMessages',
      default: true,
      message: 'Do you want i18n messages (i.e. will this component use text)?',
    },
    {
      type: 'confirm',
      name: 'wantLoadable',
      default: true,
      message: 'Do you want to load the component asynchronously?',
    },
    
  ],
  actions: data => {
    // Generate index.ts and index.test.ts
    let componentTemplate = './component/stateless.ts.hbs';
    let container = data.wantInsideContainer ? `containers/${data.containerName}` : 'components';
    
    const actions = [
      {
        type: 'add',
        path: `../../src/${container}/{{properCase name}}/index.tsx`,
        templateFile: componentTemplate,
        abortOnFail: true,
        data: {hot: 'there'}
      },
      {
        type: 'add',
        path: `../../src/${container}/{{properCase name}}/tests/index.test.ts`,
        templateFile: './component/test.ts.hbs',
        abortOnFail: true,
      }
    ];

    // If storybook
    if(data.wantStoryBook){
      actions.push({
        type: 'add',
        path: `../../src/${container}/{{properCase name}}/{{properCase name}}.stories.tsx`,
        templateFile: './component/stories.ts.hbs',
        abortOnFail: true,
      });
    }

    // If Styled components
    if(data.wantStyledComponents){
      actions.push({
        type: 'add',
        path: `../../src/${container}/{{properCase name}}/styles.ts`,
        templateFile: './component/styles.ts.hbs',
        abortOnFail: true,
      });
    }

    // If they want a i18n messages file
    if (data.wantMessages) {
      actions.push({
        type: 'add',
        path: `../../src/${container}/{{properCase name}}/messages.ts`,
        templateFile: './component/messages.ts.hbs',
        abortOnFail: true,
      });
    }

    // If want Loadable.ts to load the component asynchronously
    if (data.wantLoadable) {
      actions.push({
        type: 'add',
        path: `../../src/${container}/{{properCase name}}/Loadable.ts`,
        templateFile: './component/loadable.ts.hbs',
        abortOnFail: true,
      });
    }

    actions.push({
      type: 'prettify',
      path: `/${container}/`,
    });

    return actions;
  },
};
