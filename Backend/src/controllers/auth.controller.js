const userModel = require('../models/user.model')

const userRegisterController = async () => {
    const {email, name, password} = req.body;

    const isEmail = await userModel.findOne({
        email: email
    })

    if(!isEmail){
        res.status(422).json({
            message: "email already exists",
            status: failed
        })
    }

    const token = jwt.sign({userId : user._id},process.env.JWT_SECRET, {expiresIn : "3d"})

    res.cookies("token", token)
    

    res.status(201).json({
        user :  {
            userId : user._id,
        email:user.email,
        password: user.password
        },
        token
        
    })
}


module.exports = {
    userRegisterController
}