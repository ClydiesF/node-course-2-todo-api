// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
       return console.log('Unable to conect to MongoDB Server')
    }
    console.log('Connected to MongoDB server')

    
//DeleteMany
// db.collection('Todos').deleteMany({text:'eat lunch'}).then((result)=> {
//     console.log(result);
// });

// deleteOne
// db.collection('Todos').deleteOne({text: 'eat lunch'}).then((result) => {
//     console.log(result);
// })

//FindOneAndDelete
// db.collection('Todos').findOneAndDelete({completed: false}).then((result)=> {
//     console.log(result);
// })

// db.collection('Users').deleteMany({name:'Clyde'}).then((result) => {
//     console.log(result);
// })



    // db.close();
});