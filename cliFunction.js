/* eslint-disable no-irregular-whitespace */
/* eslint-disable arrow-body-style */
/* eslint-disable import/prefer-default-export */
import chalk from 'chalk';

export const statistics = (links) => {
  links.then((res) => {
    const extractOnlyHref = res.map((elem) => elem.href);
    // console.log(extractOnlyHref);
    const hrefSinRepeat = new Set(extractOnlyHref);// elimino los links repetidos devuelve un objeto
    console.log(chalk.cyan.bold(`
        «──────────|-❋ -|──────────»  
             Links Totales:  ${extractOnlyHref.length}   \n\t\t
             Links Unicos :  ${hrefSinRepeat.size} \n\t\t            
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

export const templateFalse = (links) => {
  links.then((res) => {
    console.log(chalk.blueBright(`
               «──────────|-❋ -|──────────»  
               |    Links Encontrados      |       
               «──────────|-❋ -|──────────»
    `));
    res.forEach((link) => {
      console.log(chalk.cyan.bold(` 
            ➣ href:  ${link.href}   \n\t\t
            ➣ text:  ${link.text} \n\t\t
            ➣ file: ${link.file} \n 
            _____________________________________________________________
            `));
    });
  })
    .catch((error) => {
      console.log(chalk.red.bold(error));
    });
};

// console.log(templateFalse(mdLinks('prueba.md', false)));

export const templateTrue = (links) => {
  links.then((res) => {
    console.log(chalk.blueBright.dim(`
    «──────────|-❋ -|──────────»  
    |    Links Validados        |       
    «──────────|-❋ -|──────────»
    `));
    res.forEach((link) => {
      console.log(chalk.cyan.bold(` 
            ➣ href:  ${link.href}   \n\t\t
            ➣ text:  ${link.text} \n\t\t
            ➣ file: ${link.file} \n\t\t
            ➣ status: ${link.status} \n\t\t
            ➣ mensaje: ${link.ok} \n\t\t
            __________________________________________________________________
            `));
    });
  })
    .catch((error) => {
      console.log(chalk.red.bold(error));
    });
};
// console.log(templateTrue(mdLinks('prueba.md', true)));

export const help = () => {
  return `
                              
                                    █▀▄▀█ █▀▄   █   █ █▄ █ █▄▀ █▀
                                    █ ▀ █ █▄▀   █▄▄ █ █ ▀█ █ █ ▄█
                                    ﹀﹀﹀﹀﹀﹀﹀﹀﹀﹀﹀﹀﹀﹀﹀﹀
            ╔══════════════════════════════════ ≪ •❈• ≫ ═══════════════════════════════════════╗
                                     ≪❈ INSTRUCCIONES DE USO ❈≫
            1. Ingresa un ruta: 
            ◞───────⊰·☆·⊱───────◟  
               mdlinks <ruta>        Resultado recibido: href, text, file.
            ◝───────⊰·☆·⊱───────◜
 
            2. Agrega cualquiera de las siguientes opciones: 
            ◞───────⊰·☆·⊱───────◟  
               --validate ó -v       Resultado recibido: href, text, file, status y mensaje.
            ◝───────⊰·☆·⊱───────◜
            ◞───────⊰·☆·⊱───────◟  
                --stats ó -s         Resultado recibido: total de links y links unicos. 
            ◝───────⊰·☆·⊱───────◜
            ◞───────⊰·☆·⊱───────◟  
                --validate --stats   Resultado recibido: total de links, links unicos y
                --stats --validate                       links rotos 
            ◝───────⊰·☆·⊱───────◜
            ╚══════════════════════════════════ ≪ •❈• ≫ ══════════════════════════════════════╝    `;
};
