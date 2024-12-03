# Cobas C311
Interface para equipo de laboratorio CobasC311

Abrir una consola en el directorio donde se copio el proyecto, y ejecutar la instrucciones 
```
npm install
```


### Configuración Config.ts

Se debe configurar los siguientes parametros:

```
export const idEfector : number = ; 
export const DBConfig = {
    server : "",
    user : "",
    password : "",
    database : ""
 };
 export const comPort : string = "";
```

+ idEfector: Debe parametrizar el número que esta en la Base de datos del SIL Multiefector
+ DBConfig:
    -   server: IP donde se encuentra alojado el servidor de la DB
    -   user: Usuario de DB
    -   password: Contraseña de la DB
    -   database: DB con la que interopera el equipo COBAS
+ comPort:

    Se debe hacer lo siguiente para obtener la información del puerto.
    Ejecute la instrucción: 
    ```
    node ./dist/Utils/list-ports.js
    ```

    El parámetro `path` que se imprimirá en la consola debe ser asignado a la variable `comPort` en el archivo `config.js`.


    > Revisar que se haya conectado correctamente el equipo COBAS a la computadora donde esta instalada la interfaz. 

    >Si hay más de un puerto listado, se debe configurar el especifica en su **pnpId** que es USB. Actualmente el cable de conexión usa un adaptador de puerto Serial a USB por dicha razon sale el nombre USB en el puerto de COBAS.

### Dependencias

+ [serialport](https://www.npmjs.com/package/serialport): Libreria que controla los recursos de puerto serie.
+ [seriate](https://www.npmjs.com/package/seriate): Libreria para conectarse a un servidor de base de datos.
+ [winston](https://www.npmjs.com/package/winston): Libreria para logs
 

 ### Test

 Para correr un Test de protocol puede ejecutar la instrucción por consola

 `npm run dev`