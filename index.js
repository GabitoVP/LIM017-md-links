/* eslint-disable import/prefer-default-export */
/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable arrow-body-style */
/* eslint-disable import/extensions */
import { pathExists, pathIsAbsolute, traverseDirectoryToFile } from './api.js';

const mdLinks = (path) => {
  return new Promise((resolve, reject) => {
    const pathExist = pathExists(path);
    if (pathExist === false) {
      reject('error');
    } else {
      const pathAbsolute = pathIsAbsolute(path);
      const travelDirectoryToFile = traverseDirectoryToFile(pathAbsolute);
      resolve(travelDirectoryToFile);
    }
  });
};

mdLinks('mdLinks')
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
