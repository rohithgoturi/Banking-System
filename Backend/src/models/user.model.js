const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = mongoose.Schema({
    email : {
        type: String,
        required: [true, "email is required for creating an account"],
        trim: true,
        lowercase: true,
        match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,"enter a valid email"],
        unique: [true,"email already exists"]
    },

    name: {
        type: String,
        required: [true, " name is required for creating an account"]
    },

    password: {
        type: String,
        required: [true, "password is required for creating an account"],
        length: [6,"password should be min length of 6"]
    },

    timestamps: {
        required: true
    }
})

userSchema.pre("save", async (next) => {
    if(!this.isModified) {
        return next()
    }

    const hash = await bcrypt.hash("password",10)
    this.password = hash

    return next();
})

userSchema.methods.comparePasswords = async (password) => {
    return await bcrypt.compare(password, this.password)
}

const userModel = mongoose.Model("user", userSchema)

module.exports = userModel;