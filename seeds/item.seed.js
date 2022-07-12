// Archivo item.seed.js

const mongoose = require('mongoose');


const Item = require('../models/Item');

const items = [
    {
        name: "Apple",
        description: "Apples are food items that can be eaten by the player.",
        obtaining: "Oak and dark oak leaves have 0.5% chance of dropping an apple when decayed or broken, but not if burned.",
        stack: "Yes (64)",
        image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgCAMAAAC8EZcfAAAAIVBMVEX///+0Ex51KALdFyX/HCucEBdUCQ7/lp1UJAn/Xml+Nw7ysuc1AAABDklEQVR4nO3YSW7DMAxA0cTN0Ob+B86OTAFWbcEMsvP+UqDktyPg3U6SpElboldLfgiwG2A3wG6A3SYFXqLP6NWmbwF2A+wG2A2w2/TASRdcBtgNsBtgN8BuEwCPRcnKBbcUAQICAgK+GzAJ++gc5Vmy8sZHlHN3RwMCAgICTgmsWIfoKzoPy7m8eycqICAgIOCqgf8vl96YCggICAi4ZWD1kfFZVTV3igABAQEBtwLM5bMvqj48nsszQEBAQEDA3xqjE5hngICAgIDbA/6VOsaM51osQEBAQMAVAqtfcmNMxcpXAAEBAQHfA5jlgxX1WPQUFiAgICDgaoAVdRl2KnogCxAQEBBwNUBJkm66AhDZlA06keG9AAAAAElFTkSuQmCC",
    },
    {
        name: "Beetroot",
        description: "A beetroot is a food and dye ingredient.",
        obtaining: "Beetroots are obtained from harvesting a fully grown crop block, which drops 1 beetroot and 1-4 seeds (about 2.5 seeds harvested on average).",
        stack: "Yes (64)",
        image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgCAMAAAC8EZcfAAAAGFBMVEX///9bHRdxFg2kJyy2SEyPLS/Acnndtbe8ucd5AAAA6UlEQVR4nO3XSwrDMAxAwTT93f/G3VkURGhQndjtvKUxaPBGeFkkSZIk6Se7t9bW2aa3AKsBVgOsBlhteGCUUS+ts3ULYD3AaoDVAKudBlw3y4AHvxsgICAg4JDAINxaj1acZehLEiAgICDgfwBjyLV1S3q24l7H1wIEBAQEnBCYsaKMf8inCRAQEBBwGmBGiE/TdTNAQEBAwH8DBivWVbbWMnScdVx1gICAgIDTAPdjOrIAAQEBAScEZuM+7essQEBAQMBpgAeP2x9gNcBqgNUAqw0PjIanAlYDrAZYDbDa8EBJkiRJ6tALdVVM9YWwc2kAAAAASUVORK5CYII=",
    },
    {
        name: "Bread",
        description: "Bread is a food item that can be eaten by the player.",
        obtaining: "Crafting with wheat",
        stack: "Yes (64)",
        image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgCAMAAAC8EZcfAAAAGFBMVEX///+8iSeMZh5lSxeieSQ/Lg5MOBFXQRTt0ezpAAAA/UlEQVR4nO3aQQ7CIBBAUbVW739jd8xmMkFjSaHvL0vovLBhw+0mSdJJ2zoDBAQEBATMMY/WMylWh1ABAQEBAU8JzDD3zjLq3gIEBAQEXBkYrHpcLxoQEBAQ8BrAjFWXoetVQEBAQMD1gN+zamp8C1bMAAQEBARcBRhb4jfZ1ZRdYXXZ3lcLEBAQEHA9YD0uQ/eyhtzAgICAgIBDgbGlHldTh5wbICAgIODJgdm43v7OAgQEBAScGthLPZAFCAgICDgN8N2KIRk1wxzIAgQEBAScEBhDaswQFiAgICDgNMAonnttZT88CwMEBAQEvAQwo+5lg1mAgICAgOcBfgC+SI1p2/S3wgAAAABJRU5ErkJggg==",
    },
    {
        name: "Carrot",
        description: "A carrot is a food item that can be eaten by the player.",
        obtaining: "Village farm plots have a 20% chance of having carrots.",
        stack: "Yes (64)",
        image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgCAMAAAC8EZcfAAAAIVBMVEX///8DZwN1KALTag0fmhysOQAzvjD/jgn/pz8AUAD/wXf8otpXAAABCUlEQVR4nO3VSXKDUBBEQfAkWfc/sHe/Nh0E4VaIj8i3ZEzY1LJIkjRBP0Vfo6N1C2A/wG6A3QC7TQ9MYYW6jnLdYR8CCAgICHg4cJvQOQsICAgIeA1gRc1L9rJy7OksQEBAQMDTAD9Gt9HnaC0K63eUs4CAgICA1wB+j8K6F4WaD6lY1WACAgICAl4DGMxjlGPV/G1TnzR/gICAgIBTAsPK6x5FFSv3BrgW/eNvAQICAgKeEHgvqlipGrg8GRAQEBDwnYHVwG2zqllr/RlAQEBAwDcB7h2zl7AAAQEBAScHbrNePGaAgICAgKcGTrC2gICAgIAnBE6FqQLsBtgNsBtgt+mBkiTt7g+hBKR1P5Hz9wAAAABJRU5ErkJggg==",
    },
    {
        name: "Chorus Fruit",
        description: "Chorus fruit is a food item native to the End that can be eaten, or cooked into popped chorus fruit.",
        obtaining: "Chorus fruit can be obtained by breaking chorus plant blocks. Each block of chorus plant has a 50% chance to drop a chorus fruit. This is not affected by Fortune.",
        stack: "Yes (64)",
        image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgCAMAAAC8EZcfAAAAHlBMVEX///9lSGSOZ414WXg6FDq6m7peLlyjgaLh1+H39PfNLByJAAABA0lEQVR4nO3ZOW7DMABEUSmL7dz/wuk4zYRBIDu2pPdbbo8VAWlZJEmSJGn3fY6eLfkhwK0Bbg1wa4BbexpwfvBtBAgICAgI+BswmK9S5q3TAAEBAQHPBmzUOfCt9D4K9TICBAQEBDwb8FbKaAjXUtCZ9zECBAQEBDwysFEbK09YHrgGzOgDHz1AQEBAwBcCrtNyXAhhtdG7P3qAgICAgC8JzOL5wddSw6SsBQQEBAQ8BzAbtkPaaGudBggICAh4PGCjNvT8Iu1KWZHPb4CAgICARwZmm0Ztv28a5u4sQEBAQMDdAFM2vEz7ZxYgICAg4G6Ajfr3HsgCBAQEBNwNUJKk5RuDB5xBi08rLgAAAABJRU5ErkJggg==",
    },
]

const itemDocuments = items.map(item => new Item(item));


mongoose
  .connect('mongodb+srv://adrian:<password>@cluster0.walckix.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
		
    const allItems = await Item.find();
		
		
    if (allItems.length) {
      await Item.collection.drop(); 
    }
  })
  .catch((err) => console.log(`Error deleting data: ${err}`))
  .then(async () => {
		
		await Item.insertMany(itemDocuments);
	})
  .catch((err) => console.log(`Error creating data: ${err}`))
	
  .finally(() => mongoose.disconnect());