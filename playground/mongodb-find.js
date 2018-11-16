// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
       return console.log('Unable to conect to MongoDB Server')
    }
    console.log('Connected to MongoDB server')

    // db.collection('Todos').find({
        
    //     _id: new ObjectID('5beb6cc638d4b942fcc59628')}).toArray().then((docs)=> {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err)=> {
    //     console.log('unable to Fetch todos', err);
    // });


    // db.collection('Todos').find().count().then((count)=> {
    //     console.log(`Todos count: ${count}`);
    // }, (err)=> {
    //     console.log('unable to Fetch todos', err);
    // });

    db.collection('Users').find({name: 'Clyde'}).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch Todos');
    })


    // db.close();
});