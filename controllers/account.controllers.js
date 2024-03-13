const Account = require("../models/Account");

const accountController ={};

accountController.createAccount = async(req, res) => {
    try{
        const { userId } = req;
        const {date, content, price, isExpense} = req.body;
        const newAccount = new Account({
            date, content, price, isExpense, userId
        });
        await newAccount.save();
        res.status(200).json({ status: 'success', data: newAccount});
    } catch(error){
        res.status(400).json({ status: 'fail', error: error.message});
    }
};

accountController.getAccount = async(req, res) => {
    try{
        const accountList = await Account.find({ userId: req.userId })
        res.status(200).json({ status: 'success', data: accountList});
    } catch(error) {
        res.status(400).json({ status: 'fail', error: error.message});
    }  
};

accountController.updateAccount = async(req, res) => {
    try{
        const {id} = req.params;
        const account = await Account.findByIdAndUpdate({ _id: id, userId: req.userId }, req.body, { new: true } );
        await account.save();
        res.status(200).json({ status: 'success', data: account});
    } catch(error) {
        res.status(400).json({ status: 'fail', error: error.message})
    }
};

accountController.deleteAccount = async(req, res) => {
    try{
        const {id} = req.params;
        await Account.findByIdAndDelete({ _id: id, userId: req.userId });
        res.status(200).json({ status: 'success'});
    } catch(error) {
        res.status(400).json({ status: 'fail', error: error.message})
    }
};

module.exports = accountController;