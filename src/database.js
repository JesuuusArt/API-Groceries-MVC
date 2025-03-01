//Aqui va la conexion ala bd de mongo
import mongoose from 'mongoose';
mongoose.connect('mongodb+srv://JesuusArt:jesusartiaga@clusterjxsus.jxafn.mongodb.net/groceries_db?retryWrites=true&w=majority&appName=ClusterJxsus')
.then((db)=> console.log('Mongodb atlas connected'))
.catch((error)=>console.error(error));
export default mongoose;