const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://shivanshagrawal21:shivansh@cluster0.1jeea.mongodb.net/gofoodMern?retryWrites=true&w=majority&appName=Cluster0';

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI, { useNewUrlParser: true });
        console.log("connected");
        
        // Fetching data after successful connection
        const fetched_data = await mongoose.connection.db.collection("food_items");
        const data = await fetched_data.find({}).toArray();
        const foodCategory = await mongoose.connection.db.collection("foodCategory");
        foodCategory.find({}).toArray(function(err, catData){
        })
        console.log(data);
        global.food_items = data; 
        global.foodCategory = catData; 

    } catch (err) {
        console.log("---", err);
    }
}

module.exports = mongoDB;
