const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/User');

const userSchema = new mongoose.Schema({
    userName: String,
    password: String,
});

const User = mongoose.model('user', userSchema);

User.find((err,users)=>{
    console.log(users);
})


