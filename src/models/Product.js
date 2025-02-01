import { model, Schema } from 'mongoose';

const productSchema = new Schema({
    barcode:{
        require: true,
        unique: true,
        type: String
    },
    description: String,
    brand: String,
    price: Number,
    cost: Number, 
    stock: Number,
    expire_date: Date
},{
    versionKey: false,
    timestamps: true
});

export default model('product', productSchema);