# Configuración de API con Express y Sequelize

A continuación se detallan los pasos para configurar una API utilizando Express.js y Sequelize para interactuar con una base de datos PostgreSQL.

## Pasos de Configuración

1. **Configuración Inicial**: Ejecutar el siguiente comando para inicializar un proyecto de Node.js y crear un archivo `package.json`.

`npm init -y`

2. **Instalación de Dependencias**: Instalar las siguientes dependencias.

`npm i express pg sequelize pg-hstore nodemon dotenv`

3. **Modificar package.json**: Agregar el siguiente script al archivo `package.json` para iniciar el servidor en modo de desarrollo.

```json
"scripts": {
  "dev": "nodemon"
}
```

4. Crear Archivo .env: Crear un archivo .env con las variables de configuración necesarias.

`APP_PORT=3000`

5. Inicializar Express en index.js:

```
require('dotenv').config()

const express = require('express')
const app = express()

const router = require('./router/router')
app.use(router)

app.listen(process.env.APP_PORT)
```

6. Crear Carpeta Router y Definir Rutas:

```
const { Router } = require('express')
const router = Router()

router.get('/', (req, res) => {
  res.json({ "hola": "mundo" })
})

module.exports = router
```

7. Agregar Router a Express:

```
const router = require('./router/router')

app.use(router)
```

8. Separar Funciones del Router, a la carpeta controllers

```
const holaMundo = (req, res) => {
  res.json({ "hola": "mundo" })
}

module.exports = { holaMundo }
```

```
const { Router } = require('express')
const router = Router()
const { holaMundo } = require("../controllers/controllers")

router.get('/', holaMundo)

module.exports = router
```

9. Instalar sequelize-cli:

`sudo npm install --save-dev sequelize-cli`


10. Inicializar sequelize-cli:

npx sequelize-cli init

11. Ir a config/config.json y cambiar la configuracion de nuestra bdd local

12. Agregar timestamps en false y quoteIndentifiers en false tambien

 ```
 "development": {
    "username": "postgres",
    "password": "root",
    "database": "veterinaria",
    "host": "127.0.0.1",
    "dialect": "postgres",
    "define":{
      "timestamps": false
    },
    "quoteIdentifiers": false
  }
  ```

 13. Ir a consola y correr:
 
 `npx sequelize-cli model:generate --name Clientes --attributes nombre:string,direccion:string,telefono:string`

 14. Se crearon models y migrations de tu tabla

 15. Si no requieres las fechas de creacion y actualizacion puedes eliminarlas de tu migration:
 ```
 createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      }
```
16. Si la tabla tiene foreign keys, agrega la relacion al bloque associate
```
 static associate(models) {
      // define association here
      Mascotas.belongsTo(models.Clientes,{
        foreginKey:'id_cliente',
        as: 'cliente'
      })
    }
```
 17. Elimina el bloque associate si la tabla no tiene relacione
```
   static associate(models) {
      // define association here
    }
```
18. Para migrar o crear la base de datos usamos

`npx sequelize-cli db:migrate`

18. Crear funciones para GET y Post en Controllers

```

const insertarCliente = async (req, res) =>{
    const Clientes = models.Clientes

    //parmas para el GET body para el POST
    const nombre = req.body.nombre
    const direccion = req.body.direccion
    const telefono = req.body.telefono

    const cliente = await Clientes.create({
        "nombre": nombre,
        "direccion": direccion,
        "telefono": telefono
    })

    res.json(cliente)

}

const obtenerClientes = async (req, res) =>{
    const Clientes = models.Clientes
    const clientes = await Clientes.findAll()
    //Si necesitamos headers los sacamos asi:
    //console.log(req.headers)
    res.json(clientes)
}

```

19. Ligar esas funciones a sus rutas correspondientes

```
router.post('/cliente', insertarCliente)
router.get('/clientes', obtenerClientes)

```

20. Disfuta