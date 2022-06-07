/* eslint-disable arrow-body-style */
import { mdLinks } from '../index';

jest.mock('../libraries.js');

describe('mdLinks', () => {
  const arrayObjFalse = [
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
  it('Deberia retornar un objeto de tipo array[href,text,file]', () => {
    return mdLinks('prueba.md', { validate: false })
      .then((resolve) => {
        expect(resolve).toEqual(arrayObjFalse);
      });
  });
  const arrayObjTrue = [
    {
      href: 'https://es.wikipedia.org/wiki/Markdown',
      text: '[Markdown]',
      file: 'C:\\Users\\N14\\Desktop\\LABORATORIA\\PROYECTOS\\LIM017-md-links\\prueba.md',
      status: 200,
      ok: 'ok',
    },
    {
      href: 'https://nodejs.org/',
      text: '[Node.js]',
      file: 'C:\\Users\\N14\\Desktop\\LABORATORIA\\PROYECTOS\\LIM017-md-links\\prueba.md',
      status: 200,
      ok: 'ok',
    },
  ];
  it('Deberia retornar un objeto de tipo array[href,text,file,status y ok]', () => {
    return mdLinks('prueba.md', { validate: true })
      .then((resolve) => {
        expect(resolve).toEqual(arrayObjTrue);
      });
  });
  it('Debería devolver un string "La ruta es inválida"', () => {
    return mdLinks('mdLink.md', { validate: false })
      .catch((reject) => {
        expect(reject).toBe('La ruta es inválida');
      });
  });
  it('Debería devolver un string "No se encuentra archivos"', () => {
    return mdLinks('mdLinks\\noArchivos')
      .catch((reject) => {
        expect(reject).toBe('No se encuentra archivos');
      });
  });
  it('Debería devolver un string "No se encuentra links"', () => {
    return mdLinks('prueba2.md')
      .catch((reject) => {
        expect(reject).toBe('No se encuentra links');
      });
  });
  it('Debería devolver un string "No es archivo md o un directorio"', () => {
    return mdLinks('note.txt', { validate: false })
      .catch((reject) => {
        expect(reject).toBe('No es archivo md o un directorio');
      });
  });
});
