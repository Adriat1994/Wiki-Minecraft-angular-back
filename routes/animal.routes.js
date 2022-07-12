const express = require('express');

// const cors = require('cors')
// const app = express()


const Animal = require("../models/Animal");

const router = express.Router()

//Endpoint que trae todos los animales http://localhost:3000/animals
router.get('/', async (req, res) => {
	try {
		const animals = await Animal.find();
		return res.status(200).json(animals)
	} catch (err) {
		return res.status(500).json(err);
	}
});

//Endpoint para buscar un animal por su nombre http://localhost:3000/animals/Axolotl
router.get('/:name', async (req, res) => {
	const {name} = req.params;

	try {
		const animalByName = await Animal.find({ name: name });
		return res.status(200).json(animalByName);
	} catch (err) {
		return res.status(500).json(err);
	}
});

//Endpoint para buscar un animal por su id http://localhost:3000/animals/animals/61d9622dac166eac8c487abd
router.get('/animals/:id', async (req, res) => {
	const id = req.params.id;
	try {
		const animal = await Animal.findById(id);
		if (animal) {
			return res.status(200).json(animal);
		} else {
			return res.status(404).json('No animal found by this id');
		}
	} catch (err) {
		return res.status(500).json(err);
	}
});

//Endpoint para crear un animal nuevo
router.post('/create', async (req, res, next) => {
    try {
      
      const newAnimal = new Animal({
        name: req.body.name,
        description: req.body.description,
        spawning: req.body.spawning,
        behavior: req.body.behavior,
		image: req.body.image
      });
  
      
      const createdAnimal = await newAnimal.save();
      return res.status(201).json(createdAnimal);
    } catch (error) {
          
      next(error);
    }
});

//Endpoint para eliminar un animal
router.delete('/:id', async (req, res, next) => {
    console.log("Entro en el delete");
    try {
        const {id} = req.params;
        
        await Animal.findByIdAndDelete(id);
        console.log("Hecho");
        return res.status(200).json('Animal deleted!');
    } catch (error) {
        console.log("Hay un error");
        return next(error);
    }
});

//Endpoint para editar un animal 
router.put('/edit/:id', async (req, res, next) => {
    try {
        const { id } = req.params 
        const animalModify = new Animal(req.body) 
        animalModify._id = id 
        const animalUpdated = await Animal.findByIdAndUpdate(id , animalModify)
        return res.status(200).json(animalUpdated)
    } catch (error) {
        return next(error)
    }
});



module.exports = router;