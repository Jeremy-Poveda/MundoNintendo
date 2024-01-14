-- Creación de la mini base de datos de mundo nintendo
CREATE DATABASE IF NOT EXISTS mundo_nintendo;
USE mundo_nintendo;

-- Tabla productos
CREATE TABLE IF NOT EXISTS productos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre_producto VARCHAR(255) NOT NULL,
    descripcion_producto VARCHAR(200),
    precio DECIMAL(10, 2) NOT NULL, -- 10 Números a la izquierda, y 2 decimales.
    detalles VARCHAR(300),
    tipo VARCHAR(50),
    cantidad INT
);

INSERT INTO productos (nombre_producto, descripcion_producto, precio, detalles, tipo, cantidad)
VALUES('Funko Pop - Lionel Messi', 'Figura de vinil - Edición campeón del mundo', 19.99, 'Tamaño: 15cm x 9cm, Peso: 10.9 oz, Material: Vinilo', 'Funko', 32);
INSERT INTO productos (nombre_producto, descripcion_producto, precio, detalles, tipo, cantidad)
VALUES('Teclado Mecánico RGB - Razer BlackWidow Elite', 'Teclado mecánico con interruptores Razer, retroiluminación RGB personalizable', 149.99, 'Interruptores Razer, Teclas programables, Reposamuñecas magnético', 'Accesorio Gamer', 25);
INSERT INTO productos (nombre_producto, descripcion_producto, precio, detalles, tipo, cantidad)
VALUES('Consola de Videojuegos - PlayStation 5', 'Consola de próxima generación con gráficos de alta fidelidad', 499.99, 'Almacenamiento SSD ultrarrápido, Control inalámbrico DualSense', 'Consola', 10);
INSERT INTO productos (nombre_producto, descripcion_producto, precio, detalles, tipo, cantidad)
VALUES('Mouse Gaming - Logitech G Pro X Superlight', 'Mouse ligero para juegos con sensor HERO, 25,600 DPI', 129.99, 'Diseño ultraligero, 5 botones programables, Batería de larga duración', 'Accesorio Gamer', 30);
INSERT INTO productos (nombre_producto, descripcion_producto, precio, detalles, tipo, cantidad)
VALUES('Monitor Gaming Curvo - ASUS ROG Strix XG49VQ', 'Monitor ultrapanorámico de 49 pulgadas, 144Hz, resolución 3840x1080', 899.99, 'Tecnología FreeSync, Iluminación ASUS Aura Sync', 'Monitor', 15);
INSERT INTO productos (nombre_producto, descripcion_producto, precio, detalles, tipo, cantidad)
VALUES('Figura de Colección - Overwatch Collector\'s Edition', 'Edición especial con estatuilla de personaje, libro de arte y contenido exclusivo', 149.99, 'Incluye juego Overwatch, Estatuilla premium de Soldier: 76, SteelBook', 'Coleccionable', 20);
