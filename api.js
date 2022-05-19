/* eslint-disable max-len */
/* eslint-disable no-confusing-arrow */
import fs from 'fs';
import path from 'path';

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
    console.log(arrayDirectory);
    arrayDirectory.forEach((file) => {
      const arrayRoute = path.join(route, file);
      console.log(arrayRoute);
      if (pathIsDirectory(arrayRoute)) {
        arrayResultRoute = arrayResultRoute.concat(traverseDirectoryToFile(arrayRoute));
        console.log(arrayResultRoute);
      }
      if (isMdFile(arrayRoute)) {
        arrayResultRoute.push(arrayRoute);
      }
    });
  } else {
    arrayResultRoute.push(route);
  }
  return arrayResultRoute;
};
console.log('Estos son los archivos dentro de la ruta:', traverseDirectoryToFile('mdLinks'));

// Funcion para saber si la ruta es un directorio
// export const itsDirectory = (filePath) => {
//     let directoryPromise = new Promise((resolve, reject) => {
//       fs.lstat(filePath, (err, stats) => {
//         if (err) {
//           reject(err);
//           return;
//         }
//         resolve(stats.isDirectory());
//       });
//     });
//     return directoryPromise;
//   };
// export const rute = (route) => {
//   if (path.isAbsolute(route)) {
//         return true;
//   }
//  else {
//   return false;
// }
// };

// export default foo = 'foo';
// console.log(fs);
// console.log(path);
