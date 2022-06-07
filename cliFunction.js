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
            - href:  ${link.href}   \n
            - text:  ${link.text} \n
            - file: ${link.file} \n 
            _____________________________________________________________
            `));
    });
  })
    .catch((error) => {
      console.log(chalk.red(`
       _______
      |.-----.|
      ||error||
      ||_.-._||
       --)-(--
    ___[=== o]___
    |:::::::::::|\\
jgs ´-=========-´()
 `));
      console.log(chalk.bgRed(error));
    });
};

// console.log(validateFalse(mdLinks('prueba.md', false)));

export const validateTrue = (links) => {
  links.then((res) => {
    console.log(chalk.blue(`
    «──────────|-❋ -|──────────»  
    |     Links Validados       |       
    «──────────|-❋ -|──────────»
    `));
    res.forEach((link) => {
      console.log(chalk.blue.bold(` 
            - href:  ${link.href}   \n
            - text:  ${link.text} \n
            - file: ${link.file} \n
            - status: ${link.status} \n
            - mensaje: ${link.ok} \n
            __________________________________________________________________
            `));
    });
  })
    .catch((error) => {
      console.log(chalk.red.bold(error));
    });
};
// console.log(validateTrue(mdLinks('prueba.md', true)));

export const statistics = (links) => {
  links.then((res) => {
    const extractHref = res.map((elem) => elem.href);
    // console.log(extractOnlyHref);
    const hrefNoRepeat = new Set(extractHref);// elimino los links repetidos devuelve un objeto
    console.log(chalk.cyan.bold(`
        «──────────|-❋ -|──────────»  
             Links Totales:  ${extractHref.length}   \n
             Links Unicos :  ${hrefNoRepeat.size} \n       
        «──────────|-❋ -|──────────» 
    `));
  })
    .catch((error) => {
      console.log(chalk.red.bold(error));
    });
};
// console.log(statistics(mdLinks("mdLinks\\prueba", true)));

export const broken = (links) => {
  links.then((res) => {
    // console.log(res);
    const brokenLinks = res.filter((elem) => elem.status >= 400);
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

export const tableHelp = () => {
  console.log(chalk.blueBright(`
 ══════════════════════════════════════════════════════════════════════════════════════════════════════════════════════╗
║                                             ${chalk.green('ĪNSTRUCCIONES DE USO 👀')}                                                  ║
╠══════════════════════════════════════╦═══════════════════════════════════════════════════════════════════════════════╣
║ ${chalk.green('mdLink <ruta>')}                        ║ Resultado: href, text, file.                                                  ║ 
╠══════════════════════════════════════╬═══════════════════════════════════════════════════════════════════════════════╣
║ ${chalk.green('--validate')}                           ║ Resultado: href, text, file, status y mensaje.                                ║
╠══════════════════════════════════════╬═══════════════════════════════════════════════════════════════════════════════╣
║ ${chalk.green('--stats')}                              ║ Resultado: total de links y links unicos.                                     ║                
╠══════════════════════════════════════╬═══════════════════════════════════════════════════════════════════════════════╣
║ ${chalk.green('--stats --validate')}                   ║ Resultado: total de links, links unicos y links rotos.                        ║
╚══════════════════════════════════════╩═══════════════════════════════════════════════════════════════════════════════╝
║ ${chalk.green('--validate --stats')}                   ║ Resultado: total de links, links unicos y links rotos.                        ║
╚══════════════════════════════════════╩═══════════════════════════════════════════════════════════════════════════════╝
`));
};

export const helpBanner = chalk.blueBright(
  figlet.textSync('         AYUDA         ', {
    font: 'Chunky',
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 100,
    whitespaceBreak: true,
  }),
);

export const welcomeBanner = chalk.blueBright(
  figlet.textSync('MD - LINKS', {
    font: 'Chunky',
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 80,
    whitespaceBreak: true,
  }),
);
