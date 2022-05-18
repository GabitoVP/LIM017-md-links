import {
  pathIsAbsolute,
  pathExists,
  pathIsDirectory,
  pathIsFile,
  isMdFile,
  traverseDirectoryToFile,
} from '../api';

const routeAbsolute = 'C:\\Users\\N14\\Desktop\\LABORATORIA\\PROYECTOS\\LIM017-md-links\\prueba.md';
describe('pathExists', () => {
  it('Deberia retornar si existe la ruta ', () => {
    expect(pathExists('prueba.md')).toBe(true);
  });
  it('Deberia retornar que no existe la ruta ', () => {
    expect(pathExists('prueba2.md')).toBe(false);
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
  it('Deberia listar y filtrar el archivo .md y retornar un array con la ruta absoluta de ese archivo', () => {
    const arrayRoutes = [
      'C:\\Users\\N14\\Desktop\\LABORATORIA\\PROYECTOS\\LIM017-md-links\\prueba.md',
    ];
    expect(traverseDirectoryToFile(pathIsAbsolute('prueba.md'))).toEqual(arrayRoutes);
  });
});
