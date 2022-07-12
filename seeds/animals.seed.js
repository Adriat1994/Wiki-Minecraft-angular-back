const mongoose = require('mongoose');


const Animal = require('../models/Animal');

const animals = [
    {
        name: "Axolotl",
        description: "An axolotl is a passive aquatic mob that attacks most other aquatic mobs.",
        spawning: "Axolotls spawn underwater in lush caves biomes and when there is a clay block less than five blocks below the spawning space.",
        behavior: "Axolotls are passive toward players and can be attached to leads. Axolotls give Regeneration I for 100 game ticks (5 seconds) per Axolotl in the fight, up to a duration of 2400 game ticks, and remove Mining Fatigue when a player kills a mob that is in combat with an axolotl.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvTTRQfBckq5Cbao7FjjvQZGVxlg1hrwbn_g&usqp=CAU"
    },
    {
        name: "Cat",
        description: "Cats are tameable passive mobs that are found in villages and swamp huts.",
        spawning: "Cats can spawn every 1200 ticks (1 minute). A random player is selected (including spectators), a random location 8-32 blocks in +/- x/z (based on player location) is chosen. A cat can spawn if that block is less than 2 chunks from a village with fewer than 5 cats, or inside a swamp hut.",
        behavior: "Cats are immune to fall damage, but they still avoid falling off cliffs high enough to normally cause fall damage.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN9wlqoJvt1cJpgqC4SyjMXEgFt9uXRBbJvQ&usqp=CAU"
    },
    {
        name: "Chicken",
        description: "Chickens are common passive mobs found in most grassy biomes, and are the main source of chicken, feathers and eggs.",
        spawning: "Chickens spawn naturally in the Overworld in groups of 4 on grass blocks, with 2 blocks of free space above it at a light level of 9 or more.",
        behavior: "If two adult chickens are fed wheat seeds, beetroot seeds, melon seeds or pumpkin seeds, a baby spawns. They cannot breed for 5 minutes afterward.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4yoJC7HuPVPcXdIefiz-E57T0ODmZMKzidg&usqp=CAU"
    },
    {
        name: "Fox",
        description: "Foxes are nocturnal passive mobs that spawn commonly in taiga, old growth taiga, and snowy taiga biomes. A fox can carry a single item in its mouth, but prefers food over other items.",
        spawning: "Foxes spawn in taiga, old growth taiga, snowy taiga and grove biomes, in groups of 2–4.",
        behavior: "Foxes move quickly like ocelots and flee from nearby players and wolves. However, they do not flee if the player approaches them while sneaking. They are unaffected by sweet berry bushes, taking no damage or speed reduction while moving in them.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRA41yy5DLLscr-DNjRsmDXyFnYpaHp3S1EQ&usqp=CAU"
    },
    {
        name: "Parrot",
        description: "Parrots are rare tameable mobs found in jungles. Parrots can imitate sounds of nearby hostile mobs and can perch on the player's shoulders.",
        spawning: "Parrots rarely spawn, with a 0.2 chance in jungle biomes. They can be found in groups of 1–2 at Y-level 70 or above. They spawn only on logs, leaves and grass blocks.",
        behavior: "Parrots are passive. They can fly, and usually fly upward if struck. They fly under normal conditions, but they can tire[1] and return to the ground.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIih7lm2s2pYHniiitdOMsWOmUV6A10cKfpA&usqp=CAU"
    },
]


const animalDocuments = animals.map(animal => new Animal(animal));


mongoose
  .connect('mongodb+srv://adrian:<password>@cluster0.walckix.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
		
    const allAnimals = await Animal.find();
		
		
    if (allAnimals.length) {
      await Animal.collection.drop(); 
    }
  })
  .catch((err) => console.log(`Error deleting data: ${err}`))
  .then(async () => {
		
		await Animal.insertMany(animalDocuments);
	})
  .catch((err) => console.log(`Error creating data: ${err}`))
	
  .finally(() => mongoose.disconnect());