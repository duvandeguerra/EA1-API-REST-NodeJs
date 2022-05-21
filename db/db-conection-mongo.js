const mongoose = require('mongoose');

const getConnection = async () => {
    console.log ('Iniciando Conexión BD')
    try {
        const url = 'mongodb://user_bd:vrW7ni1VgeUUn8ol@cluster0-shard-00-00.v0hfk.mongodb.net:27017,cluster0-shard-00-01.v0hfk.mongodb.net:27017,cluster0-shard-00-02.v0hfk.mongodb.net:27017/iud-inventarios?ssl=true&replicaSet=atlas-wiu19n-shard-0&authSource=admin&retryWrites=true&w=majority';

        await mongoose.connect(url);

        console.log('conexión exitosa');
    } catch (error) {
        console.log(error);
    }

}

module.exports = {
    getConnection
}