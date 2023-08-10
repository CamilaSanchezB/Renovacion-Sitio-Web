Getting started
===============

1.  Descargar e instalar [node.js](https://nodejs.org/en/download)
2.  Descargar [el repositorio](https://github.com/innovaspace/innova-space.com/tree/desarrollo)
3.  Correr un servidor MySQL y APACHE[🛈](#xampp)
4.  Importar la base de datos innovaspace.sql
5.  Dirigirse al directorio server y abrir una terminal
6.  Ejecutar el comando
```
server> npm install
```  
7.  Luego ejecutar el comando
```
server> npm start
```  
8.  Dirigirse al directorio client y abrir una terminal
9.  Ejecutar el comando
    
```
client> npm install
```
10.  Luego ejecutar el comando
    
```
client> npm start
```
11.  Listo. Para acceder al sitio dirigete a http://localhost:3000 o http://_tu\_direccion\_ip_:3000 para acceder desde otro dispositivo que esté en la misma red

##### IMPORTANTE

Los archivos client/src/functions/dbfunctionalities.js y server/app.js deben ser modificados. Donde aparezca 172.15.0.200 por localhost si se va a trabajar exclusivamente en la máquina que hostea los servidores o por tu _dirección ip_ si se pretende dar acceso remoto

Ejemplo con XAMPP
-----------------

1.  Descargar [XAMPP](https://www.apachefriends.org/es/download.html)
2.  Ejecutar el instalador. Seleccionar del menú: APACHE, MySQL y phpMyAdmin
3.  Ejecutar XAMPP
4.  Encender los servidos APACHE y MySQL

![Imagen - xampp prender servidores](https://github.com/innovaspace/innova-space.com/blob/desarrollo/server/docs/img/xampp1.png)
![Imagen - xampp servidores prendidos](https://github.com/innovaspace/innova-space.com/blob/desarrollo/server/docs/img/xampp2.png)

6.  Acceder a http://localhost/phpmyadmin/
7.  En el navbar seleccionar Importar
8.  Subir el archivo .sql y hacer click en el botón que dice importar en la parte de abajo
9.  Listo
