const mongoose = require('mongoose');
const User = require('./User');
const Schema = mongoose.Schema;

const AccountSchema = Schema({
    userId: {type: mongoose.ObjectId, ref: User},
    date: {type: String, required: true},
    content: {type: String, required: true},
    price: {type: Number, required: true},
    isExpense: {type: Boolean, required: true}
},{timestamps: true});

AccountSchema.methods.toJSON = function() {
    const obj = this._doc
    delete obj.__v
    delete obj.updatedAt
    delete obj.createdAt
    return obj
};

const Account = mongoose.model('Account', AccountSchema);
module.exports = Account;