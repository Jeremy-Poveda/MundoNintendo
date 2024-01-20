-- Creación de la mini base de datos de mundo nintendo
CREATE DATABASE IF NOT EXISTS mundo_nintendo;
USE mundo_nintendo;

-- Tabla productos
CREATE TABLE IF NOT EXISTS productos (
    id INT AUTO_INCREproductosMENT PRIMARY KEY,
    nombre_videojuego VARCHAR(255) NOT NULL,
    descripcion_videojuego VARCHAR(200),
    precio DECIMAL(10, 2) NOT NULL, -- 10 Números a la izquierda, y 2 decimales.
    detalles VARCHAR(300),
    cantidad INT,
    tipo VARCHAR(50),
    genero VARCHAR(50),
    url_imagen VARCHAR(255)
);

INSERT INTO productos (nombre_videojuego, descripcion_videojuego, precio, detalles, cantidad, tipo, genero, url_imagen)
VALUES
('The Legend of Zelda: Breath of the Wild', 'Aventura épica en el reino de Hyrule', 59.99, 'Explora el vasto mundo abierto, resuelve acertijos y enfrenta enemigos', 100, 'videojuego', 'Aventura', 'https://i.imgur.com/TEmSMxl.png'),
('Cyberpunk 2077', 'Acción y aventura en un mundo futurista', 49.99, 'Sumérgete en la ciudad de Night City, lucha contra corporativos y toma decisiones que afectan la historia', 75, 'videojuego', 'Acción', 'https://i.imgur.com/EyOFGIS.png'),
('FIFA 22', 'Simulación de fútbol con gráficos realistas', 54.99, 'Juega partidos de fútbol emocionantes, gestiona tu equipo y compite en ligas', 120, 'videojuego', 'Deporte', 'https://i.imgur.com/yl9Pe40.jpg'),
('Super Mario Odyssey', 'Acompaña a Mario en una aventura alrededor del mundo', 49.99, 'Recoge Power Moons, enfrenta a Bowser y disfruta de nuevos mundos', 80, 'videojuego', 'Aventura', 'https://i.imgur.com/EAE3O30.jpg'),
('Assassin\'s Creed Valhalla', 'Explora la era vikinga y forja tu propio camino', 59.99, 'Saquea, construye y conquista en la piel de un vikingo', 90, 'videojuego', 'Acción', 'https://i.imgur.com/cylW7Ey.jpg'),
('NBA 2K22', 'Simulación de baloncesto con realismo asombroso', 59.99, 'Juega en la NBA, mejora tus habilidades y compite en diversos modos', 110, 'videojuego', 'Deporte', 'https://i.imgur.com/yF9Y0lE.jpg'),
('Minecraft', 'Construye y explora mundos infinitos', 29.99, 'Crea tu propio universo, explora cuevas y construye estructuras', 150, 'videojuego', 'Aventura', 'https://i.imgur.com/wkjvfNL.png'),
('Call of Duty: Warzone', 'Experimenta la intensidad de la guerra moderna', 0.00, 'Participa en batallas masivas en línea en el famoso Battle Royale', 200, 'videojuego', 'Acción', 'https://i.imgur.com/7CS3zzB.png'),
('Rocket League', 'Fútbol con coches y mucha acción', 19.99, 'Conduce coches futuristas y anota goles en este juego frenético', 70, 'videojuego', 'Deporte', 'https://i.imgur.com/agARzf4.jpg'),
('Red Dead Redemption 2', 'Explora el salvaje oeste en una épica historia', 39.99, 'Conviértete en un forajido y vive la vida en una frontera implacable', 85, 'videojuego', 'Acción', 'https://i.imgur.com/5vH4hqg.jpg'),
('The Sims 4', 'Crea y controla personas en un mundo virtual', 39.99, 'Diseña hogares, gestiona vidas y crea historias únicas', 120, 'videojuego', 'Simulación', 'https://i.imgur.com/TNeBCOQ.jpg'),
('Gran Turismo 7', 'Simulador de carreras con gráficos espectaculares', 59.99, 'Conduce autos de ensueño y compite en eventos a nivel mundial', 80, 'videojuego', 'Deporte', 'https://i.imgur.com/YUbIsSJ.jpg'),
('Mortal Kombat 11', 'Brutales peleas con personajes icónicos', 44.99, 'Libra batallas intensas y desata fatalidades en este juego de lucha', 100, 'videojuego', 'Lucha', 'https://i.imgur.com/hKfHs55.jpg'),
('Animal Crossing: New Horizons', 'Crea tu isla paradisíaca y vive la vida', 49.99, 'Decora, pesca, socializa y personaliza tu propio paraíso isleño', 95, 'videojuego', 'Simulación', 'https://i.imgur.com/OnwcNsH.jpg'),
('Fortnite', 'Battle Royale con construcción y estilo único', 0.00, 'Sobrevive, construye y compite en este juego multijugador masivo', 250, 'videojuego', 'Acción', 'https://i.imgur.com/k56AXcg.jpg'),
('Spider-Man: Miles Morales', 'Aventura superheroica en el universo de Spider-Man', 49.99, 'Sigue la historia de Miles Morales, lucha contra villanos y domina nuevos poderes', 70, 'videojuego', 'Aventura', 'https://i.imgur.com/qnkuPCH.png'),
('F1 2021', 'Experimenta la emoción de la Fórmula 1', 59.99, 'Corre en los circuitos oficiales, gestiona tu equipo y compite en línea', 65, 'videojuego', 'Deporte', 'https://i.imgur.com/Qp4trIs.jpg'),
('The Witcher 3: Wild Hunt', 'Aventura épica con monstruos y magia', 29.99, 'Sigue la historia del cazador de monstruos Geralt de Rivia', 110, 'videojuego', 'Aventura', 'https://i.imgur.com/H5FTg3T.jpg'),
('Overwatch', 'Combate en un shooter en equipo con héroes únicos', 39.99, 'Forma parte de un equipo y lucha por los objetivos en este juego de disparos', 90, 'videojuego', 'Acción', 'https://i.imgur.com/9i0gVhC.jpg'),
('Final Fantasy VII Remake', 'Revive la épica historia de Cloud y Sephiroth', 49.99, 'Explora Midgar y lucha contra enemigos en este remake emocionante', 75, 'videojuego', 'RPG', 'https://i.imgur.com/ugXHGWx.jpg');


