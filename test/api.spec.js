import {
  pathIsAbsolute,
  pathExists,
  pathIsDirectory,
  pathIsFile,
  isMdFile,
  traverseDirectoryToFile,
  extractMdFileLinks,
  extractDirectoriesLinks,
} from '../api';

const routeAbsolute = 'C:\\Users\\N14\\Desktop\\LABORATORIA\\PROYECTOS\\LIM017-md-links\\prueba.md';
describe('pathExists', () => {
  it('Deberia retornar si existe la ruta ', () => {
    expect(pathExists('prueba.md')).toBe(true);
  });
  it('Deberia retornar que no existe la ruta ', () => {
    expect(pathExists('prueba3.md')).toBe(false);
  });
});

describe('pathIsAbsolute', () => {
  it('Deberia retornar una ruta absoluta', () => {
    expect(pathIsAbsolute('C:\\Users\\N14\\Desktop\\LABORATORIA\\PROYECTOS\\LIM017-md-links\\prueba.md')).toStrictEqual(routeAbsolute);
  });
  it('Deberia retornar una ruta absoluta', () => {
    expect(pathIsAbsolute('./prueba.md')).toBe(routeAbsolute);
  });
});

describe('pathIsDirectory', () => {
  it('Deberia retornar si existe el directorio(true)', () => {
    expect(pathIsDirectory('mdLinks')).toBe(true);
  });
  it('Deberia retornar false para una ruta de archivo', () => {
    expect(pathIsDirectory('./prueba.md')).toBe(false);
  });
});

describe('pathIsFile', () => {
  it('Deberia retornar false si no es un archivo', () => {
    expect(pathIsFile('mdLinks')).toBeFalsy();
  });
  it('Deberia retornar true para archivo', () => {
    expect(pathIsFile('./prueba.md')).toBeTruthy();// igual que el toBeFalsy pero para true
  });
});

describe('isMdFile', () => {
  it('Deberia retornar false si no es un archivo md', () => {
    expect(isMdFile('note.txt')).toBeFalsy();
  });
  it('Deberia retornar true para archivo md', () => {
    expect(isMdFile('./prueba.md')).toBeTruthy();
  });
});

describe('traverseDirectoryToFile', () => {
  it('Deberia recorrer y almacenar en un array las rutas de archivos md', () => {
    const arrayRoutes = ['mdLinks\\md2.md', 'mdLinks\\prueba\\md1.md'];
    expect(traverseDirectoryToFile('mdLinks')).toEqual(arrayRoutes);
  });
  it('Deberia almacenar en un array las rutas de archivos md', () => {
    const arrayRoutes = ['prueba.md'];
    expect(traverseDirectoryToFile('prueba.md')).toEqual(arrayRoutes);
  });
  it('No deberia almacenar en un array las rutas de archivos que no son md', () => {
    const arrayRoutes = 'ERROR : No es de tipo md';
    expect(traverseDirectoryToFile('note.txt')).toEqual(arrayRoutes);
  });
  it('Deberia listar y filtrar el archivo .md y retornar un array con la ruta absoluta de ese archivo', () => {
    const arrayRoutes = [
      'C:\\Users\\N14\\Desktop\\LABORATORIA\\PROYECTOS\\LIM017-md-links\\prueba.md',
    ];
    expect(traverseDirectoryToFile(pathIsAbsolute('prueba.md'))).toEqual(arrayRoutes);
  });
});

describe('extractMdFileLinks', () => {
  it('Deberia retornar un objeto de tipo array[href,text,file]', () => {
    const objLinks = [
      {
        href: 'https://es.wikipedia.org/wiki/Markdown',
        text: '[Markdown]',
        file: 'C:\\Users\\N14\\Desktop\\LABORATORIA\\PROYECTOS\\LIM017-md-links\\prueba.md',
      },
      {
        href: 'https://nodejs.org/',
        text: '[Node.js]',
        file: 'C:\\Users\\N14\\Desktop\\LABORATORIA\\PROYECTOS\\LIM017-md-links\\prueba.md',
      },
    ];
    expect(extractMdFileLinks('prueba.md')).toEqual(objLinks);
  });
  it('No deberia retornar un objeto de tipo array', () => {
    const objLinks = 'No se encontraron links';
    expect(extractMdFileLinks('prueba2.md')).toBe(objLinks);
  });
});

describe('extractDirectoriesLinks', () => {
  it('Deberia retornar un objeto de tipo array[href,text,file]', () => {
    const objLinksDirectory = [
      {
        href: 'https://www.youtube.com/watch?v=lPPgY3HLlhQ',
        text: '[Píldora recursión - YouTube Laboratoria Developers]',
        file: 'C:\\Users\\N14\\Desktop\\LABORATORIA\\PROYECTOS\\LIM017-md-links\\mdLinks\\md2.md',
      },
      {
        href: 'https://medium.com/laboratoria-developers/recursi%C3%B3n-o-recursividad-ec8f1a359727',
        text: '[Recursión o Recursividad - Laboratoria Developers en Medium]',
        file: 'C:\\Users\\N14\\Desktop\\LABORATORIA\\PROYECTOS\\LIM017-md-links\\mdLinks\\md2.md',
      },
      {
        href: 'https://curriculum.laboratoria.la/es/topics/javascript/04-arrays',
        text: '[Arreglos]',
        file: 'C:\\Users\\N14\\Desktop\\LABORATORIA\\PROYECTOS\\LIM017-md-links\\mdLinks\\prueba\\md1.md',
      },
      {
        href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/',
        text: '[Array - MDN]',
        file: 'C:\\Users\\N14\\Desktop\\LABORATORIA\\PROYECTOS\\LIM017-md-links\\mdLinks\\prueba\\md1.md',
      },
    ];
    expect(extractDirectoriesLinks(traverseDirectoryToFile('mdLinks'))).toEqual(objLinksDirectory);
  });
});
