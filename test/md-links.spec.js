import { routeIsAbsolute, pathExists } from '../api';

const routeTest = 'C:\\Users\\N14\\Desktop\\LABORATORIA\\PROYECTOS\\LIM017-md-links\\prueba.md';
describe('pathExists', () => {
  it('Deberia retornar si existe la ruta ', () => {
    expect(pathExists('prueba.md')).toBe(true);
  });
  it('Deberia retornar que no existe la ruta ', () => {
    expect(pathExists('prueba2.md')).toBe(false);
  });
});

describe('rute', () => {
  it('hh', () => {
    expect(routeIsAbsolute('./prueba.md')).toBe(routeTest);
  });
});
