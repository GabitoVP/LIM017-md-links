import  fs from 'fs';
import path from 'path';

const myArgument = process.argv[2];
console.log(myArgument);

// funcion para resolver si la ruta es absoluta o relativa
export const routeIsAbsolute = (route) => path.isAbsolute(route) ? route : path.resolve(route);

// leer archivo
export const readFile = (route) => fs.readFileSync(route, 'utf-8');

// determinar si la ruta existe
export const pathExists = (route) => fs.existsSync(route);
console.log(pathExists('C:\\Users\\N14\\Desktop\\LABORATORIA\\PROYECTOS\\LIM017-md-links\\prueba.md'));

// determinar si es un directorio
export const pathIsDirectory = (route) => fs.lstatSync(route).isDirectory();

// determinar si es un archivo
export const pathIsFile = (route) => fs.statSync(route).isFile();

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

// export const isvalidRoute = (route) => {
//   const pathAbsolute = (path.isAbsolute(route)) ? route : resolve(route);
//   const valid = fs.existsSync(pathAbsolute);
//   return { valid, pathAbsolute };
// };
