/* eslint-disable arrow-body-style */
/* eslint-disable max-len */
/* eslint-disable no-confusing-arrow */
import fs from 'fs';
import path from 'path';
import fetch from 'node-fetch';

const myArgument = process.argv[2];

// determinar si la ruta existe
export const pathExists = (route) => fs.existsSync(route);
console.log('la ruta existe?', pathExists(myArgument));
// console.log(pathExists('C:\\Users\\N14\\Desktop\\LABORATORIA\\PROYECTOS\\LIM017-md-links\\prueba.md'));

// funcion para resolver si la ruta es absoluta o relativa
export const pathIsAbsolute = (route) => path.isAbsolute(route) ? route : path.resolve(route);
console.log('se convierte la ruta en absoluta', pathIsAbsolute('prueba.md'));

// leer archivo
export const readFile = (route) => fs.readFileSync(route, 'utf-8');
console.log('puede leer el archivo?', readFile('prueba.md'));

// determinar si es un directorio
export const pathIsDirectory = (route) => fs.lstatSync(route).isDirectory();
console.log('La ruta es un directorio?:', pathIsDirectory('C:\\Users\\N14\\Desktop\\LABORATORIA\\PROYECTOS\\LIM017-md-links\\mdLinks'));

// determinar si es un archivo
export const pathIsFile = (route) => fs.statSync(route).isFile();
console.log('La ruta es un archivo?:', pathIsFile('prueba.md'));

// determinar si un archivo tiene extención md
export const isMdFile = (extension) => path.extname(extension) === '.md';
console.log('Es un archivo md?:', isMdFile('note.txt'));

// función para recursividad
export const traverseDirectoryToFile = (route) => {
  let arrayResultRoute = [];
  if (pathIsDirectory(route)) {
    const arrayDirectory = fs.readdirSync(route);
    // console.log(arrayDirectory);
    arrayDirectory.forEach((file) => {
      const arrayRoute = path.join(route, file);
      // console.log(arrayRoute);
      if (pathIsDirectory(arrayRoute)) {
        arrayResultRoute = arrayResultRoute.concat(traverseDirectoryToFile(arrayRoute));
        // console.log(arrayResultRoute);
      }
      if (isMdFile(arrayRoute)) {
        arrayResultRoute.push(arrayRoute);
      }
    });
  } else if (isMdFile(route)) {
    arrayResultRoute.push(route);
  } else {
    return 'ERROR : No es de tipo md';
  }
  return arrayResultRoute;
};
// console.log('Estos son los archivos dentro de la ruta:', traverseDirectoryToFile('mdLinks'));

// Leer el archivo y extraer links
export const extractMdFileLinks = (route) => {
  const arrayLinks = [];

  const expRegFile = /\[(.*)\]\((https*?:([^"')\s]+))/gi;
  const expRegUrl = /(((https?:\/\/)|(http?:\/\/)|(www\.))[^\s\n)]+)(?=\))/gi;
  const expRegTextUrl = /\[(.*)\]/gi;
  // lee el archivo ===/////
  const readFilePath = readFile(route);
  const allLinksMd = readFilePath.match(expRegFile); // match() obtener todas las ocurrencias de una expresión regular dentro de una cadena.
  // console.log(allLinksMd);
  const arrayOnlyUrl = readFilePath.match(expRegUrl);
  // console.log((arrayOnlyUrl));

  if (allLinksMd != null) {
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < allLinksMd.length; i++) {
      const textMd = allLinksMd[i].match(expRegTextUrl)[0];
      // console.log((allLinksMd[i].match(expRegTextUrl)[0]));// object after than string object (Rewiev Reg. expression)
      // console.log(typeof (allLinksMd[i].match(expRegTextUrl)));
      const objLinks = {
        href: arrayOnlyUrl[i],
        text: textMd,
        file: pathIsAbsolute(route).toString(),
      };
      arrayLinks.push(objLinks);
    }
  } else {
    return 'No se encontraron links';
  }
  return arrayLinks;
};
// console.log(extractMdFileLinks('C:\\Users\\N14\\Desktop\\LABORATORIA\\PROYECTOS\\LIM017-md-links\\prueba2.md'));

// función que lee directorios y extrae links

export const extractDirectoriesLinks = (arrayFileMd) => {
  const arrayReadDirectory = [];
  arrayFileMd.forEach((file) => {
    const arrayLinksDirectory = extractMdFileLinks(file);
    // console.log(arrayLinksDirectory);
    arrayReadDirectory.push(arrayLinksDirectory);
  });
  return arrayReadDirectory.flat();
};
const prueba = traverseDirectoryToFile('linkRoto.md');
// console.log(extractDirectoriesLinks(prueba));

// validar links con peticiones http
export const validateLinks = (urls) => {
  return Promise.all(urls.map((arrayLinks) => {
    return fetch(arrayLinks.href)
      .then((resolve) => {
        const objResolveLinks = {
          ...arrayLinks,
          status: resolve.status,
          ok: (resolve.status >= 200) && (resolve.status <= 399) ? 'ok' : 'fallo',
        };
        return objResolveLinks;
      })
      .catch(() => {
        return {
          ...arrayLinks,
          status: 'Este link esta roto',
          ok: 'fallo',
        };
      });
  }));
};

validateLinks(extractDirectoriesLinks(prueba))
  .then((resolve) => console.log('links:', resolve));
