const mongoose = require('mongoose');


const Biome = require('../models/Biome');

const biomes = [
    {
        name: "Snowy Plains",
        features: "Snow, Snowfall, Ice, Spruce trees, Igloos, Strays, White and some Black & White Rabbits, Polar Bears, Occasional Tall Grass, Villages, Pillager outposts",
        description: "An expansive biome with a huge amount of snow layers. Sugar cane can generate in this biome, but can become uprooted when chunks load as the water sources freeze to ice.",        
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQlbentazEDabxixqiZ0E06NW2ygHmow_d7w&usqp=CAU"
    },
    {
        name: "Ice Spikes",
        features: "Packed Ice, Ice, Snow, Snowfall, Snow Blocks, Strays, White and some Black & White Rabbits, Polar Bears, Ice Spikes, Ice Patches",
        description: "A rare variation of the Snowy Plains biome that features large spikes and glaciers of packed ice. Usually, the spikes are 10 to 20 blocks tall, but some long, thin spikes can reach over 50 blocks in height. ",        
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYjoEfmVbvam3gILHmMuwFWHORhISHOcKjPw&usqp=CAU"
    },
    {
        name: "Windswept Hills",
        features: "Oak Trees, Spruce Trees, Gravel, Flowers, Emerald Ore, Infested Stone, Llamas",
        description: "A highland biome with some steep hilltops. Cliffs, peaks, valleys, waterfalls, overhangs, floating islands, caverns and many other terrain features exist here, offering outstanding views.",        
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd7O1uF-x4tAAfCTcl-66nqSjxfUlBvwZSzg&usqp=CAU"
    },
    {
        name: "Windswept Forest",
        features: "Stone, Dirt, Llama, Emerald ore, Infested stone, Spruce Trees, Oak Trees",
        description: "This biome is found when the windswept hills are located next to forested biomes. It doesn't generate stone patches so the floor is entirely covered by grass and there are more spruce and oak trees in this biome, forming small forests with a lower tree density than the taiga biome.",        
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaGIfXvGIlD1g3EwvzYC5GWFWQP_FJty8k2Q&usqp=CAU"
    },
    {
        name: "Plains",
        features: "Tall Grass, Grass, Flowers, Villages, Horses, Donkeys, Pillager outposts, Oak Trees, Bee Nests",
        description: "A flat and grassy biome with rolling hills and few oak trees. Villages are common. Cave openings, lava lakes and waterfalls are easily identifiable due to the flat unobstructed terrain.",        
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV7X_cMTADDfqW-Hzwx25WPTZYaS2wISH_SA&usqp=CAU"
    }
]


const biomeDocuments = biomes.map(biome => new Biome(biome));


mongoose
  .connect('mongodb+srv://adrian:<password>@cluster0.walckix.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
		
    const allBiomes = await Biome.find();
		
		
    if (allBiomes.length) {
      await Biome.collection.drop(); 
    }
  })
  .catch((err) => console.log(`Error deleting data: ${err}`))
  .then(async () => {
		
		await Biome.insertMany(biomeDocuments);
	})
  .catch((err) => console.log(`Error creating data: ${err}`))
	
  .finally(() => mongoose.disconnect());