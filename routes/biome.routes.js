const express = require('express');

// const cors = require('cors')
// const app = express()


const Biome = require("../models/Biome");

const router = express.Router()

//Endpoint que trae todos los biomas http://localhost:3000/biomes
router.get('/', async (req, res) => {
	try {
		const biomes = await Biome.find();
		return res.status(200).json(biomes)
	} catch (err) {
		return res.status(500).json(err);
	}
});

//Endpoint para buscar un bioma por su nombre http://localhost:3000/biomes/Plains
router.get('/:name', async (req, res) => {
	const {name} = req.params;

	try {
		const biomeByName = await Biome.find({ name: name });
		return res.status(200).json(biomeByName);
	} catch (err) {
		return res.status(500).json(err);
	}
});

//Endpoint para buscar un bioma por su id http://localhost:3000/biomes/biomes/61d977d759cb849c087111d0
router.get('/biomes/:id', async (req, res) => {
	const id = req.params.id;
	try {
		const biome = await Biome.findById(id);
		if (biome) {
			return res.status(200).json(biome);
		} else {
			return res.status(404).json('No biome found by this id');
		}
	} catch (err) {
		return res.status(500).json(err);
	}
});

//Endpoint para crear un bioma nuevo
router.post('/create', async (req, res, next) => {
    try {
      
      const newBiome = new Biome({
        name: req.body.name,
        features: req.body.features,
        description: req.body.description,        
		image: req.body.image
      });
  
      
      const createdBiome = await newBiome.save();
      return res.status(201).json(createdBiome);
    } catch (error) {
          
      next(error);
    }
});

//Endpoint para eliminar un bioma
router.delete('/:id', async (req, res, next) => {
    console.log("Entro en el delete");
    try {
        const {id} = req.params;
        
        await Biome.findByIdAndDelete(id);
        console.log("Hecho");
        return res.status(200).json('Biome deleted!');
    } catch (error) {
        console.log("Hay un error");
        return next(error);
    }
});

//Endpoint para editar un bioma 
router.put('/edit/:id', async (req, res, next) => {
    try {
        const { id } = req.params 
        const biomeModify = new Biome(req.body) 
        biomeModify._id = id 
        const biomeUpdated = await Biome.findByIdAndUpdate(id , biomeModify)
        return res.status(200).json(biomeUpdated)
    } catch (error) {
        return next(error)
    }
});

module.exports = router;