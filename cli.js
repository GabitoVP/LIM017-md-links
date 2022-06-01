#!/usr/bin/env node
/* eslint-disable no-mixed-operators */
/* eslint-disable import/extensions */
import chalk from 'chalk';
import { mdLinks } from './index.js';
import {
  broken,
  statistics,
  help,
  // banner,
  templateFalse,
  templateTrue,
} from './cliFunction.js';
// const myArgument = process.argv[2];

// const prueba = mdLinks(myArgument, process.argv[3]);
// console.log(process.argv);

const [, , ...args] = process.argv;
// const pathCli = process.argv[2];
// const args = process.argv;
// const acceptUppercase = args[2].toLowerCase();

if (args.length === 0) {
  console.log(chalk.magenta(`
          BIENVENIDO(A) A LA LIBRERÍA MDLINKS
    Ingresa una ruta:
            «──────────|-❋ -|──────────»  
            |   Ejemplo: mdlink <ruta>  |       
            «──────────|-❋ -|──────────»
    
    ó ingrese --help para ver instrucciones de uso
            «──────────|-❋ -|──────────»  
            |   Ejemplo: mdlink --help  |       
            «──────────|-❋ -|──────────»
    `));
}
if (args.length === 1 && args[0] === '--help') {
  console.log(chalk.yellow(help()));
  // console.log((banner));
}

if (args.length === 1 && args[0] !== '--help') {
  templateFalse(mdLinks(args[0], { validate: false }));
}

if (args.length === 2 && args[1] === '--validate' || args[1] === '--v') {
  templateTrue(mdLinks(args[0], { validate: true }));
}

if (args.length === 2 && args[1] === '--stats' || args[1] === '--s') {
  statistics(mdLinks(args[0], { validate: false }));
}

if (args.length === 3 && args[1] === '--stats' || args[1] === '--validate' && args[2] === '--stats' || args[2] === '--validate') {
  statistics(mdLinks(args[0], { validate: false }));
  broken(mdLinks(args[0], { validate: true }));
}
