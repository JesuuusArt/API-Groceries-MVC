import Product from "../models/Product.js";

const productsDao = {};
productsDao.getAll = async () => {
    return await Product.find();
}

export default productsDao;