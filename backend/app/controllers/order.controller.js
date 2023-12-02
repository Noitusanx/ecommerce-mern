const db = require('../models/index');

const Order = db.orders;

exports.findOrder = (req, res)=>{
    const id = Number(req.params.id);
    
    Order.aggregate([{
        $match: {
            user_id: id
        }
    }, {
        // Mencari data
        $lookup: {
            from: "products",
            localField: "cart_items",
            foreignField: "code",
            as: "products"
        }
    }
]).then((result)=>{
    res.send(result);
}).catch((err)=>{
    res.status(409).send({
        message: err.message || 'Some error while retrieving products'
    })
})
}

exports.addToCart = (req, res) => {
    const id = Number(req.params.id);
    const productCode = String(req.body.product) /* body untuk form */

    Order.updateOne({
        user_id: id
    }, {
        // Menambahkan data yang tidak duplicate
        $addToSet: {
            cart_items: productCode
        }
    }).then((result) => {
        res.send(result);
    }).catch((err) => {
        res.status(409).send({
            message: err.message
        })
    })
}

exports.removeFromCart = (req, res) => {
    const id = Number(req.params.id);
    const productCode = String(req.params.product) /* Mengambil code dari params */

    Order.updateOne({
        user_id: id
    }, {
        // menarik (menghapus itemnya)
        $pull: {
            cart_items: productCode
        }
    }).then((result) => {
        res.send(result);
    }).catch((err) => {
        res.status(409).send({
            message: err.message
        })
    })
}