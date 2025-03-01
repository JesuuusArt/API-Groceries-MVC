import {model,Schema} from "mongoose";
const productSchema =new Schema({
    barcode:{
        require:true,
        unique:true,
        type:String,
    },
    description:String,
    brand:String,
    price:Number,
    cost:Number,
    expire_date:String,
    stock:Number
},{
    versionKey:false,
    timestamps:true
});
export default model('product', productSchema);