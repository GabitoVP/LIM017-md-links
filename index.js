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
  isMdFile,
  pathIsDirectory,
} from './api.js';

export const mdLinks = (path, options) => {
  return new Promise((resolve, reject) => {
    const pathExist = pathExists(path);
    if (pathExist === false) {
      reject('La ruta es inválida');
    } else {
      const pathAbsolute = pathIsAbsolute(path);
      if (isMdFile(pathAbsolute) || pathIsDirectory(pathAbsolute)) {
        const travelDirectoryToFile = traverseDirectoryToFile(pathAbsolute);
        if (travelDirectoryToFile.length === 0) {
          reject('No se encuentra archivos');
        } else {
          const extractDirectoryLinks = extractDirectoriesLinks(travelDirectoryToFile);
          if (extractDirectoryLinks.length === 0) {
            reject('No se encuentra links');
          } else if (options.validate) {
            resolve(validateLinks(extractDirectoryLinks));
          } else {
            resolve(extractDirectoryLinks);
          }
        }
      } else {
        reject('No es archivo md o un directorio');
      }
    }
  });
};

// mdLinks('hola', { validate: false })
//   .then((res) => console.log('Promesa Resuelta: ', res))
//   .catch((err) => console.log(err));
