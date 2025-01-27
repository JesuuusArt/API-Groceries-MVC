import Product from "../models/Product.js";
const productsDao = {};

productsDao.getAll = async () => {
    return await Product.find();
}

productsDao.getOne = async (barcode) => {
    return await Product.findOne({ barcode: barcode });
}

productsDao.insert = async (product) => {
    return await Product.create(product);
}

productsDao.updateOne = async (product, barcode) => {
    return await Product.findOneAndUpdate({ barcode: barcode }, product);
}

productsDao.deleteOne = async (barcode) => {
    return await Product.deleteOne({ barcode: barcode });
}

export default productsDao;