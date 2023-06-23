const mongo = require('mongoose')

mongo.connect('mongodb://127.0.0.1:27017/test')
.then((res)=>{
    
    console.log('Connection Established')
})
.catch(err=>{
    console.log(err)
    console.log('Connection Failed')

})