import * as mongoose from 'mongoose';

export class DBHelper {

    static init(): void { // connect options: , {useNewUrlParser: true, useUnifiedTopology: true} as mongoose.ConnectOptions
        mongoose.connect('mongodb://mongo:27017/pets-mgmt')
            .then(() => console.log('Connection to mongoDB successful'))
            .catch((err: Error) => console.error(`Could not connect to mongoDB.\n\n${err}`));
    }
}