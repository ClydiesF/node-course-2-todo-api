// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
       return console.log('Unable to conect to MongoDB Server')
    }
    console.log('Connected to MongoDB server')

    
//find one and Update

// db.collection('Todos').findOneAndUpdate({
//     _id: new ObjectID('5beeef9b87b8cebf000f9c18')
// }, {
//     $set: {
//         completed: true
//     }
// }, {
//         returnOriginal: false
    
// }).then((result) =>{
//     console.log(result);
// })


//practice 
// db.collection('Users').findOneAndUpdate({name:'Kita'},{ $set: {name: 'Batman'}} , {returnOriginal: false}).then((result) => {
//     console.log(result);
// })


// increment
db.collection('Users').findOneAndUpdate({
    age: 29
},{
$inc: {
    age: +2
}
}, {
    returnOriginal:false

}).then((result) => {
    console.log(result);
});
    // db.close();
});