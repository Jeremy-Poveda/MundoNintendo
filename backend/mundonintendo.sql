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