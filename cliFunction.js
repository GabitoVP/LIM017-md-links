/* eslint-disable no-irregular-whitespace */
/* eslint-disable arrow-body-style */
/* eslint-disable import/prefer-default-export */
import chalk from 'chalk';
import figlet from 'figlet';

export const validateFalse = (links) => {
  links.then((res) => {
    console.log(chalk.blue(`
               «──────────|-❋ -|──────────»  
               |    Links Encontrados      |       
               «──────────|-❋ -|──────────»
    `));
    res.forEach((link) => {
      console.log(chalk.blue.bold(` 
            - href:  ${link.href}   \n\t\t
            - text:  ${link.text} \n\t\t
            - file: ${link.file} \n 
            _____________________________________________________________
            `));
    });
  })
    .catch((error) => {
      console.log(chalk.bgRed(error));
    });
};

// console.log(templateFalse(mdLinks('prueba.md', false)));

export const validateTrue = (links) => {
  links.then((res) => {
    console.log(chalk.blue(`
    «──────────|-❋ -|──────────»  
    |    Links Validados        |       
    «──────────|-❋ -|──────────»
    `));
    res.forEach((link) => {
      console.log(chalk.blue.bold(` 
            - href:  ${link.href}   \n\t\t
            - text:  ${link.text} \n\t\t
            - file: ${link.file} \n\t\t
            - status: ${link.status} \n\t\t
            - mensaje: ${link.ok} \n\t\t
            __________________________________________________________________
            `));
    });
  })
    .catch((error) => {
      console.log(chalk.red.bold(error));
    });
};
// console.log(templateTrue(mdLinks('prueba.md', true)));

export const statistics = (links) => {
  links.then((res) => {
    const extractHref = res.map((elem) => elem.href);
    // console.log(extractOnlyHref);
    const hrefNoRepeat = new Set(extractHref);// elimino los links repetidos devuelve un objeto
    console.log(chalk.cyan.bold(`
        «──────────|-❋ -|──────────»  
             Links Totales:  ${extractHref.length}   \n\t\t
             Links Unicos :  ${hrefNoRepeat.size} \n\t\t            
        «──────────|-❋ -|──────────» 
    `));
  })
    .catch((error) => {
      console.log(chalk.red.bold(error));
    });
};
// console.log(statistics(mdLinks("prueba\\hola", true)));

export const broken = (links) => {
  links.then((res) => {
    // console.log(res);
    const brokenLinks = res.filter((elem) => elem.status >= 400 || elem.status === 'Este link esta roto');
    console.log(chalk.cyan.bold(`
        «──────────|-❋ -|──────────»  
              Links Roto: ${brokenLinks.length}             
        «──────────|-❋ -|──────────» 
    `));
  })
    .catch((error) => {
      console.log(chalk.red.bold(error));
    });
};

export const help = chalk.blue(
  figlet.textSync('MD - LINKS', {
    font: 'Chunky',
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 80,
    whitespaceBreak: true,
  }),
);
