/* eslint-disable import/prefer-default-export */
/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable arrow-body-style */
/* eslint-disable import/extensions */
import {
  pathExists,
  pathIsAbsolute,
  traverseDirectoryToFile,
  extractDirectoriesLinks,
  validateLinks,
} from './api.js';

const mdLinks = (path, options) => {
  return new Promise((resolve, reject) => {
    const pathExist = pathExists(path);
    if (pathExist === false) {
      reject('La ruta es inválida');
    } else {
      const pathAbsolute = pathIsAbsolute(path);
      const travelDirectoryToFile = traverseDirectoryToFile(pathAbsolute);
      const extractDirectoryLinks = extractDirectoriesLinks(travelDirectoryToFile);
      if (options.validate) {
        resolve(validateLinks(extractDirectoryLinks));
      } else {
        resolve(extractDirectoryLinks);
      }
    }
  });
};
// mdLinks('mdLinks')
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

mdLinks('linkRoto.md', { validate: true })
  .then((res) => console.log('Promesa Resuelta: ', res))
  .catch((err) => console.log(err));
