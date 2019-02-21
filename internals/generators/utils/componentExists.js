/**
 * componentExists
 *
 * Check whether the given component exist in either the components or containers directory
 */

const fs = require('fs');
const path = require('path');

const pageComponents = fs.readdirSync(
  path.join(__dirname, '../../../src/components'),
);
const pageContainers = fs.readdirSync(
  path.join(__dirname, '../../../src/containers'),
);
let components = pageComponents.concat(pageContainers);

function componentExists(comp, data) {
  if(data && data.wantInsideContainer){
    let dir = path.join(__dirname, `../../../src/containers/${data.containerName}`) + '/components/';
    if(fs.existsSync(dir)) components = fs.readdirSync(dir);
    else {
      components = fs.readdirSync(
          path.join(__dirname, `../../../src/containers/${data.containerName}/`),
      );
    }
  }
  return components.some((component)=>component.toLowerCase() === comp.toLowerCase());
}

module.exports = componentExists;
