import { model, Schema } from 'mongoose';

const productSchema = new Schema({
    Barcode:{
        require: true,
        unique: true,
        type: String
    },
    Description: String,
    Brand: Number,
    Price: Number,
    Stock: Number,
    Expire_date: Number
},{
    versionKey: false,
    timestamps: true
});

export default model('product', productSchema);