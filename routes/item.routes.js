const express = require('express');

// const cors = require('cors')
// const app = express()


const Item = require("../models/Item");

const router = express.Router();

// app.use(cors())

//Endpoint para buscar todos los items http://localhost:3000/items
router.get('/', async (req, res) => {
	try {
		const items = await Item.find();
		return res.status(200).json(items)
	} catch (err) {
		return res.status(500).json(err);
	}
});

//Endpoint para buscar un item por su nombre http://localhost:3000/items/Apple
router.get('/:name', async (req, res) => {
	const {name} = req.params;

	try {
		const itemByName = await Item.find({ name: name });
		return res.status(200).json(itemByName);
	} catch (err) {
		return res.status(500).json(err);
	}
});

//Endpoint para buscar un item por su id http://localhost:3000/items/items/61cdee2fd960b7d796b6ee84
router.get('/items/:id', async (req, res) => {
	const id = req.params.id;
	try {
		const item = await Item.findById(id);
		if (item) {
			return res.status(200).json(item);
		} else {
			return res.status(404).json('No item found by this id');
		}
	} catch (err) {
		return res.status(500).json(err);
	}
});



//Endpoint para crear un item nuevo
router.post('/create', async (req, res, next) => {
    try {
      
      const newItem = new Item({
        name: req.body.name,
        description: req.body.description,
        obtaining: req.body.obtaining,
        stack: req.body.stack,
		image: req.body.image
      });
  
      
      const createdItem = await newItem.save();
      return res.status(201).json(createdItem);
    } catch (error) {
          
      next(error);
    }
});


//Endpoint para eliminar un item
router.delete('/:id', async (req, res, next) => {
    console.log("Entro en el delete");
    try {
        const {id} = req.params;
        
        await Item.findByIdAndDelete(id);
        console.log("Hecho");
        return res.status(200).json('Item deleted!');
    } catch (error) {
        console.log("Hay un error");
        return next(error);
    }
});


//Endpoint para editar un item 
router.put('/edit/:id', async (req, res, next) => {
    try {
        const { id } = req.params 
        const itemModify = new Item(req.body) 
        itemModify._id = id 
        const itemUpdated = await Item.findByIdAndUpdate(id , itemModify)
        return res.status(200).json(itemUpdated)
    } catch (error) {
        return next(error)
    }
});





module.exports = router;