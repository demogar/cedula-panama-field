# cedula-panama-field

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

Componentes en [React](https://reactjs.org/) que funciona como _wrapper_ para tener un campo de cédula con su respectiva validación.

El proyecto está creado en dos formatos:

- **Un solo campo**, donde el único campo es un campo de texto (`input`).
- **Varios campos**, donde los campos están divididos en cuatro diferentes campos (provincia, sufijo, libro y tomo), para facilitar el ingreso de una cédula en algunas ocasiones particulares.

[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo

## TODO

Este proyecto está en _Work in Progress_.

- Tests
- Documentación

## Sobre la validación

Este respositorio utiliza el [Validador de cédula de Panamá](https://github.com/merlos/cedula-panama), proyecto creado por [Juan Merlos](https://github.com/merlos).

Todas las atribuciones y trabajo realizado para crear las expresiones regulares que permiten la validación de forma rápida y fácil van para el creador original.

De igual forma, este proyecto utiliza [nwb](https://github.com/insin/nwb) como base.

## Licencia (MIT)

> Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
