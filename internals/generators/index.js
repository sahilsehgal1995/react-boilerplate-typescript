/**
 * generator/index.js
 *
 * Exports the generators so plop knows them
 */

const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const componentGenerator = require('./component/index.js');
const containerGenerator = require('./container/index.js');
const languageGenerator = require('./language/index.js');

module.exports = plop => {
  const info = `Created by Bantai:${require('os').userInfo().username} for Turtlemint on ${new Date().toLocaleString()}`;
  plop.setPartial('proprietary', info);
  plop.setGenerator('component', componentGenerator);
  plop.setGenerator('container', containerGenerator);
  plop.setGenerator('language', languageGenerator);
  plop.addHelper('directory', comp => {
    try {
      fs.accessSync(
        path.join(__dirname, `../../src/containers/${comp}`),
        fs.F_OK,
      );
      return `containers/${comp}`;
    } catch (e) {
      return `components/${comp}`;
    }
  });
  plop.addHelper('curly', (object, open) => (open ? '{' : '}'));
  plop.setActionType('prettify', (answers, config) => {
    const folderPath = `${path.join(
      __dirname,
      '/../../src/',
      config.path,
      plop.getHelper('properCase')(answers.name),
      '**.{ts|tsx}',
    )}`;
    exec(`npm run prettify -- "${folderPath}"`);
    return folderPath;
  });
};
