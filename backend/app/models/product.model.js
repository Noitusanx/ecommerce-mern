module.exports = mongoose => {
    const Schema = mongoose.Schema({
        code: String,
        name: String,
        price: Number,
        description: String,
        imageUrl: String,
        averageRating: Number,
    });

    // menyederhanakan object id (id pada mongodb = _id disederhanakan menjadi id saja)

    Schema.method('toJSON', function(){
        const {__v, _id, ...object} = this.toObject();
        object.id = _id;
        return object;
    })

    // Pada saat membuat model pastikan kita membuat nama singular dari collectionnya (products)
    const Product = mongoose.model('products', Schema);
    return Product;
}