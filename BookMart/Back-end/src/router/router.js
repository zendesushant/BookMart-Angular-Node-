const express=require('express');
const router=new express.Router();
const User=require('../model/users')
const jwt=require('jsonwebtoken');
const upload=require('upload')
const bcrypt=require('bcrypt');
const imageModel=require('../model/image-model')
const MIME_TYPE_MAP={
    'image/png':'png',
    'image/jpeg':'jpg',
    'image/jpg':'jpg'
};
const multer=require('multer');
const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        const isValid=MIME_TYPE_MAP[file.mimetype]
        let error=new Error('Invalud mime Type')
        if(isValid){
        error=null;}
        cb(error,"images")
        
    },
    filename:(req,file,cb)=>{
        const name=file.originalname.toLocaleLowerCase().split(' ').join('-');
        console.log(name)
        const ext=MIME_TYPE_MAP[file.mimetype];
        console.log(ext)
        cb(null,name+'-'+Date.now()+'.'+ext)
        
    }
})






router.post('/signup',(req,res,next)=>{

    User.find({username:req.body.username}).then((result)=>{
            User.find({username:req.body.username}).then((user)=>{
                if(user.length)
                res.status(409).json({errorMessage:"User Already Exist."});
                else
                {
                    
                    bcrypt.hash(req.body.password,8).then((hasedPassword)=>{
                        const user=new User({
                           username:req.body.username,
                           password:hasedPassword,
                           mobile:req.body.mobile
                        })
                        user.save().then((user)=>{
                        const token=jwt.sign({username:user.username},'MySignUpSecreteKey')
                       
                        res.status(200).json({token:token,expiresIn:3600});
                        }).catch((err)=>{
                            res.status(500).json({err:'Failed to Craete User'});
                        })
                    })
                }
            })

    })
    
})




router.get('/validateusername',(req,res,next)=>{
    User.find({username:req.query.username}).then((result)=>{
            if(result.length)
            res.status(200).send(true)
            else
            res.status(200).send(false)

    })
})
router.post('/login',async (req,res,next)=>{
    console.log("---------------------------")
        let retrivingUserFromDb= await User.findOne({username:req.body.username});
        if(!retrivingUserFromDb)
        {
            res.status(401).json({errorMessage:"Email DoseNot Exist"})
        }
        else
        {
        const isVerified = await bcrypt.compare(req.body.password,retrivingUserFromDb.password)
        console.log(isVerified)
        if(isVerified)
        {
            const token=jwt.sign({username:retrivingUserFromDb.username},"MySecreteSignUpKey",{expiresIn:10})
            res.status(200).json({token:token,expiresIn:3600})
        }
        else{res.status(401).json({errorMessage:"User Password Auth Failed"})};
    }
    },
    (err)=>{
        res.status(401).json({errorMessage:"User Auth Failed"});
    })


    router.post('/PostImage',multer({storage:storage}).single("image"),(req,res,next)=>{
        const url=req.protocol+"://"+req.get("host");
        console.log(req.body.image)
        const imagePost=new imageModel({
            title:req.body.title,
            imagePath:url+"/images/"+req.file.filename
        })
        imagePost.save().then((result)=>{
            res.status(200).json({
                id:result._id,
                title:result.title,
                imagePath:result.imagePath
            })
        }).catch((err)=>{
            result=imagePost;
        })

        
    })

module.exports=router;