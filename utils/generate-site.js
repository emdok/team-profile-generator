const fs = require('fs');

/**** Function to write file to dist folder ****/
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {

            if(err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

/**** Function to copy CSS from src to dist folder ****/
const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            if(err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'File copied!'
            });
        });
    });
};

/**** Export functions for use in index.js ****/
module.exports = { writeFile, copyFile};