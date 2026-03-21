const mongoose = require('mongoose')
const bcrypt = require('bcrypt');


const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: [true,"email is requiredd for creating account"],
        trim: true,
        lowercase: true,
        match : [/emailvalidationregex/,"enter a vaild mail id"],
        unique: [true, "email already exists"]
    },

    name : {
        type: String,
        required: [true, "name is required to create an account"]
    },

    password: {
        type: String,
        required: [true, "password is required to create an account"],
        length: [6, "password should be min of 6 characters"]
    },

    timestamps: {
        required: true
    }
})

userSchema.pre("save", async (next) => {
    if(!this.isModified("password")){
        return next()
    }

    const hash = await bcrypt.hash("password",10)
    this.password = hash
    
    return next()
})

userSchema.methods.comparePassword = async (password) => {
    return await bcrypt.compare(password,this.password);
}

const userModel = mongoose.Model("userModels", userModel)

modules.export = userModel;