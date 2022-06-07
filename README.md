# Markdown Links

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Planificación y organización](#2-planificación-y-organización)
* [3. Diagrama de flujo](#3-diagrama-de-flujo)
* [4. Instalación](#4-instalación)
* [5. Instrucciones](#5-instrucciones)

***

## 1. Preámbulo

Md-links es una libreria de línea de comando (CLI) que facilita la lectura, análisis y generar reportes estadísticos de los links contenidos en archivos de formato Markdown.

Permite:

* Proporcionar información básica sobre links de los archivos .md
* Validar links de archivos .md
* Reportar links, links unicos y links rotos.

## 2. Planificación y organización

La planificación del proyecto se realizó a través de [Git Projects](https://github.com/GabitoVP/LIM017-md-links/projects/1) con una serie de tareas, issues y milestones para organizar mejor el trabajo, para luego poder cumplir los objetivos de forma semanal. Mediante issues y milestones se pudo priorizar de forma concreta y ordenar cada tarea con sus respectivos comentarios.

[![Git-Projects.png](https://i.postimg.cc/TPV8QrcL/Git-Projects.png)](https://postimg.cc/HJkPk8Rd)

## 3. Diagrama de flujo

Aqui puedes visualizar el [flujo](https://drive.google.com/file/d/1Ua1kSVk6UQIADMHXlumtETlKBieCPayk/view?usp=sharing) del proceso que se realizo para la librería de mdLinks

[![Diagrama-de-flujo.png](https://i.postimg.cc/J4Qd9D5B/Diagrama-de-flujo.png)](https://postimg.cc/1ffHFzT9)

## 4. Instalación

Para la instalación de esta librería será necesario ejecutar la siguiente línea de comando en tu terminal

`npm i md-links-gabito`

## 5. Instrucciones

La librería se puede ejecutar de la siguiente manera a través de la terminal:

1. Si ingresa sólo `mdLink` mostrará una guia para ingresar la ruta o pedir ayuda.

[![inicio.png](https://i.postimg.cc/d0TtwhmJ/inicio.png)](https://postimg.cc/jWtrhdF1)

2. Para acceder a la opción ayuda y ver las instrucciones de uso:

`mdLink --help`

[![Ayuda.png](https://i.postimg.cc/ZR7fH52y/Ayuda.png)](https://postimg.cc/PpDzrTtt)

3.  Para obtener los links.

👉 Ingrese mdLink <<ruta>path</ruta>> por ejemplo:

`mdLink ./prueba.md` o `mdLink prueba.md` para archivos md.
En el caso de directorios colocar `mdLink ./mdLinks` o `mdLink mdLinks`

[![false.png](https://i.postimg.cc/65dPJtGF/false.png)](https://postimg.cc/D8w61V6c)

4. Para hacer una petición HTTP y averiguar si el link funciona o no.

👉 Ingrese mdLink <<ruta>path</ruta>> --validate

El output en este caso incluye la palabra ok o fallo después de la URL, así como el status de la respuesta recibida a la petición HTTP a dicha URL, por ejemplo: `mdLink prueba.md --validate`

[![true.png](https://i.postimg.cc/3xN2jZ79/true.png)](https://postimg.cc/G40BdG4s)

5. Para obtener estadísticas básicas sobre los links.

👉 Ingrese mdLink <<ruta>path</ruta>> --stats

El output  mostrará  el total de links y  links unicos, por ejemplo: `mdLink prueba.md --stats`

[![stats.png](https://i.postimg.cc/jdB7XvGx/stats.png)](https://postimg.cc/0bdj5GkF)

6. Para obtener estadísticas que necesiten de los resultados de la validación

👉 Ingrese mdLink <<ruta>path</ruta>> --stats --validate o --validate --stats

El output (salida) será un texto con el total de links, los links unicos y los links rotos, por ejemplo: `mdLink prueba.md --stats --validate` o `mdLink prueba.md --validate --stats`

[![validate-stats.png](https://i.postimg.cc/bwK4qXW7/validate-stats.png)](https://postimg.cc/v4t0vKQh)

7. Mensajes de error

🙅  Si no existe la ruta, mostrará este mensaje:

[![error1.png](https://i.postimg.cc/L8Ys816n/error1.png)](https://postimg.cc/21YYH3WD)

🙅 Si no es de tipo md o un directorio, mostrará este mensaje:

[![error2.png](https://i.postimg.cc/sXVQxgNq/error2.png)](https://postimg.cc/hJ5P3cg1)

🙅 Si en un directorio no hay archivos md, mostrará este mensaje:

[![error3.png](https://i.postimg.cc/YS4k3Km0/error3.png)](https://postimg.cc/kVdkJHsP)

🙅 Si no se encuentra links dentro de un archivo md, mostrará este mensaje:

[![error4.png](https://i.postimg.cc/ZK0f0bkW/error4.png)](https://postimg.cc/XpSKz0YW)

## 6. Autora

🙋 Gabriela Lucero Victorio Poma


