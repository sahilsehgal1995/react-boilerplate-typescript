/**
 * containersList
 *
 * Get a list of existing containers
 */

const fs = require('fs');
const path = require('path');

const blackList = ['App', 'LanguageProvider'];

const containersList = () => {
    return fs.readdirSync(path.join(__dirname, '../../../src/containers')).filter(file =>{
        var fullpath = fs.statSync((path.join(__dirname, '../../../src/containers')));
        return fullpath.isDirectory() && !blackList.includes(file);
    });
};
const instance = containersList();
module.exports = instance;
