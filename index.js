const express = require('express');
const cors = require('cors')

require("./utils/db");

const Item = require("./models/Item");
const Animal = require("./models/Animal");
const Biome = require("./models/Biome");
const itemRoutes = require("./routes/item.routes");
const animalRoutes = require("./routes/animal.routes");
const biomeRoutes = require("./routes/biome.routes");


const PORT = process.env.PORT || 3000;
const server = express();
const router = express.Router();

server.use(cors(
	{
		application: {
			cors: {
				server: [
					{
						origin: "*", //servidor que deseas que consuma o (*) en caso que sea acceso libre
						credentials: true
					}
				]
			}
	}}
));

server.use(express.json());
server.use(express.urlencoded({ extended: false }));

//Ruta para ver todos los items http://localhost:3000/items
server.use("/items", itemRoutes);

//Ruta para ver todos los animales http://localhost:3000/animals
server.use("/animals", animalRoutes);

//Ruta para ver todos los biomas http://localhost:3000/biomes
server.use("/biomes", biomeRoutes);

server.use('*', (req, res, next) => {
	const error = new Error('Route not found'); 
	error.status = 404;
	next(error); 
  });

server.use((error, req, res, next) => {
	return res.status(error.status || 500).json(error.message || 'Unexpected error');
});


server.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}`);
});