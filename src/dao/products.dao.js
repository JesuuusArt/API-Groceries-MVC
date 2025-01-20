import Product from "../models/Product.js";
const productsDao = {};

productsDao.getAll = async () => {
    return await Product.find();
}

productsDao.getOne = async (barcode) => {
    return await Product.findOne({ barcode: barcode });
}

export default productsDao;