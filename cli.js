#!/usr/bin/env node
/* eslint-disable no-mixed-operators */
/* eslint-disable import/extensions */
import chalk from 'chalk';
import { mdLinks } from './index.js';
import {
  broken,
  statistics,
  validateFalse,
  validateTrue,
  welcomeBanner,
  helpBanner,
  tableHelp,
} from './cliFunction.js';

const [, , ...args] = process.argv;

if (args.length === 0) {
  console.log(welcomeBanner);
  console.log(chalk.blueBright(`
    Ingresa una ruta:

               Ejemplo: mdLink <ruta>       
            «──────────────────────────»
    
    ó ingrese --help para ver instrucciones de uso
          
               Ejemplo: mdLink --help        
            «──────────────────────────»
    `));
}
if (args.length === 1 && args[0] === '--help') {
  console.log(helpBanner);
  tableHelp();
}

if (args.length === 1 && args[0] !== '--help') {
  validateFalse(mdLinks(args[0], { validate: false }));
}

if (args.length === 2 && args[1] === '--validate') {
  validateTrue(mdLinks(args[0], { validate: true }));
}

if (args.length === 2 && args[1] === '--stats') {
  statistics(mdLinks(args[0], { validate: false }));
}

if (args.length === 3 && args[1] === '--stats' || args[1] === '--validate' && args[2] === '--stats' || args[2] === '--validate') {
  statistics(mdLinks(args[0], { validate: false }));
  broken(mdLinks(args[0], { validate: true }));
}
