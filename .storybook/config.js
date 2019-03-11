import { configure } from '@storybook/react';

const req = require.context('../src/components/', true, /.stories.tsx$/);

function loadStories() {
  require('./welcomeStory');
  req.keys().forEach(req);
}

configure(loadStories, module);
