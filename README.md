# MundoNintendo

Proyecto de lenguajes de programación, Paralelo #1, hecho con Angular y PHP

## Integrantes:
- Jeremy Poveda
- Kevin Roldán
- Jorge Mawyin

## Instrucciones de uso

Instalar XAMPP o cualquier servidor HTTP
agregar los scripts de php a una carpeta /api, además de ejecutar el script mundonintendo.sql
Iniciar el servidor, y verificar la conexión de la REST API ej:
http://localhost/api/index.php?findAll

Para probar el findByPriceRange se tiene que especificar el rango de precios en la url
De la siguiente manera (x representa el valor numérico del precio deseado):
http://localhost/api/productos.php?findByPriceRange&minPrice=x&maxPrice=x

Luego para levantar el frontEnd abrir el proyecto de Angular, instalar los módulos con 
npm install
y por último ng serve -o
