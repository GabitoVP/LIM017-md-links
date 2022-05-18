import { routeIsAbsolute } from './api.js';

console.log(routeIsAbsolute);

// const mdLinks = (route, options) => {
//     if (!rute(route)) {
//       console.log('no hay path')
//       return
//     }
//     console.log(rute(route));
//   }

// const mdLinks = (path, option) => {
//   return new Promise((resolve, reject) => {
//     routeIsAbsolute(path)
//     .then(() => {
//       if (routeIsAbsolute(path)){
//         return routeIsAbsolute(path);
//       }
//     })
//     .cath((error) => {
//   console.log(error);
//     })
//   })
// }

//   mdLinks(process.argv[2])
