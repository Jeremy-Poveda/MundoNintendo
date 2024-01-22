-- Creación de la mini base de datos de mundo nintendo
CREATE DATABASE IF NOT EXISTS mundo_nintendo;
USE mundo_nintendo;

-- Tabla productos
CREATE TABLE IF NOT EXISTS productos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    descripcion VARCHAR(200),
    precio DECIMAL(10, 2) NOT NULL, -- 10 Números a la izquierda, y 2 decimales.
    detalles VARCHAR(300),
    cantidad INT,
    tipo VARCHAR(50),
    genero VARCHAR(50),
    url_imagen VARCHAR(255),
    fecha_ingreso  DATE
);

-- Tabla Usuarios
CREATE TABLE IF NOT EXISTS usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    correo VARCHAR(100) NOT NULL,
    contrasena VARCHAR(255) NOT NULL,
    unique(correo)
);

-- Tabla Carrito
CREATE TABLE IF NOT EXISTS carrito (
    id INT AUTO_INCREMENT PRIMARY KEY,
	usuario_id int,
    producto_id int,
    cantidad int,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
    FOREIGN KEY (producto_id) REFERENCES productos(id)
);


-- Tabla Historial de create
CREATE TABLE IF NOT EXISTS historial_compras (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT,
    producto_id INT,
    cantidad INT,
    precio_total DECIMAL(10, 2),
    fecha_compra TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
    FOREIGN KEY (producto_id) REFERENCES productos(id)
);

INSERT INTO usuarios (nombre, correo, contrasena)
VALUES ('Jorge Mawyin', 'jmawyin@espol.edu.ec', '12345678'),
('Jeremy Poveda', 'jrpoveda@espol.edu.ec', 'abcdefgh'),
('Kevin Roldan', 'kroldan@espol.edu.ec', '87654321');

INSERT INTO productos (nombre, descripcion, precio, detalles, cantidad, tipo, genero, url_imagen)
VALUES
('The Legend of Zelda: Breath of the Wild', 'Aventura épica en el reino de Hyrule', 59.99, 'Consola: Nintendo Switch', 100, 'videojuego', 'Aventura', 'https://i.imgur.com/TEmSMxl.png'),
('Cyberpunk 2077', 'Acción y aventura en un mundo futurista', 49.99, 'Consola: PS4', 75, 'videojuego', 'Acción', 'https://i.imgur.com/EyOFGIS.png'),
('FIFA 22', 'Simulación de fútbol con gráficos realistas', 54.99, 'Consola: PS4', 120, 'videojuego', 'Deporte', 'https://i.imgur.com/yl9Pe40.jpg'),
('Super Mario Odyssey', 'Acompaña a Mario en una aventura alrededor del mundo', 49.99, 'Consola: Nintendo Switch', 80, 'videojuego', 'Aventura', 'https://i.imgur.com/EAE3O30.jpg'),
('Assassins Creed Valhalla', 'Explora la era vikinga y forja tu propio camino', 59.99, 'Consola: Xbox One', 90, 'videojuego', 'Acción', 'https://i.imgur.com/cylW7Ey.jpg'),
('NBA 2K22', 'Simulación de baloncesto con realismo asombroso', 59.99, 'Consola: PS5', 110, 'videojuego', 'Deporte', 'https://i.imgur.com/yF9Y0lE.jpg'),
('Minecraft', 'Construye y explora mundos infinitos', 29.99, 'Consola: PS4', 150, 'videojuego', 'Aventura', 'https://i.imgur.com/wkjvfNL.png'),
('Call of Duty: Warzone', 'Experimenta la intensidad de la guerra moderna', 0.00, 'Consola: PS3', 200, 'videojuego', 'Acción', 'https://i.imgur.com/7CS3zzB.png'),
('Rocket League', 'Fútbol con coches y mucha acción', 19.99, 'Consola: PS4', 70, 'videojuego', 'Deporte', 'https://i.imgur.com/agARzf4.jpg'),
('Red Dead Redemption 2', 'Explora el salvaje oeste en una épica historia', 39.99, 'Consola: Xbox One', 85, 'videojuego', 'Acción', 'https://i.imgur.com/5vH4hqg.jpg'),
('The Sims 4', 'Crea y controla personas en un mundo virtual', 39.99, 'Consola: Xbox One', 120, 'videojuego', 'Simulación', 'https://i.imgur.com/TNeBCOQ.jpg'),
('Gran Turismo 7', 'Simulador de carreras con gráficos espectaculares', 59.99, 'Consola: PS5', 80, 'videojuego', 'Deporte', 'https://i.imgur.com/YUbIsSJ.jpg'),
('Mortal Kombat 11', 'Brutales peleas con personajes icónicos', 44.99, 'Consola: PS4', 100, 'videojuego', 'Lucha', 'https://i.imgur.com/hKfHs55.jpg'),
('Animal Crossing: New Horizons', 'Crea tu isla paradisíaca y vive la vida', 49.99, 'Consola: Nintendo Switch', 95, 'videojuego', 'Simulación', 'https://i.imgur.com/OnwcNsH.jpg'),
('Fortnite', 'Battle Royale con construcción y estilo único', 10.00, 'Consola: PS4', 250, 'videojuego', 'Acción', 'https://i.imgur.com/k56AXcg.jpg'),
('Spider-Man: Miles Morales', 'Aventura superheroica en el universo de Spider-Man', 49.99, 'Consola: PS5', 70, 'videojuego', 'Aventura', 'https://i.imgur.com/qnkuPCH.png'),
('F1 2021', 'Experimenta la emoción de la Fórmula 1', 59.99, 'Consola: PS5', 65, 'videojuego', 'Deporte', 'https://i.imgur.com/Qp4trIs.jpg'),
('The Witcher 3: Wild Hunt', 'Aventura épica con monstruos y magia', 29.99, 'Consola: Xbox One', 110, 'videojuego', 'Aventura', 'https://i.imgur.com/H5FTg3T.jpg'),
('Overwatch', 'Combate en un shooter en equipo con héroes únicos', 39.99, 'Consola: PS4', 90, 'videojuego', 'Acción', 'https://i.imgur.com/9i0gVhC.jpg'),
('Final Fantasy VII Remake', 'Revive la épica historia de Cloud y Sephiroth', 49.99, 'Consola: PS4', 75, 'videojuego', 'RPG', 'https://i.imgur.com/ugXHGWx.jpg');


