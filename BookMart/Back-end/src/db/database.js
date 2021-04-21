const mongoose=require('mongoose');
const dataBaseName='BookMart';
const connectionURL=`mongodb://127.0.0.1:27017/${dataBaseName}`;
mongoose.connect(connectionURL,{useNewUrlParser:true,useCreateIndex:true}).then(()=>{

    console.log("DateBase Connection Established")
}).catch(()=>{
    console.log("xxxxxx.........Failed to Establis DataBaseConnection........xxxxxx")
})