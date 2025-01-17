import mongoose from "mongoose";

mongoose.connect('mongodb+srv://JesuusArt:jesusartiaga@clusterjxsus.jxafn.mongodb.net/groceries_db?retryWrites=true&w=majority&appName=ClusterJxsus')
.then((db) => console.log('MongoDB atlas is connected'))
.catch((error) => console.error(error));

export default mongoose;