module.exports = mongoose =>{
    const Schema = mongoose.Schema({
        user_id : Number,
        cart_items : [String],
    })

    Schema.method('toJSON', function(){
        const {__v, _id, ...object} = this.toObject();
        object.id = _id;
        return object; 
    })

    const Order = mongoose.model('orders', Schema);
    return Order;
}