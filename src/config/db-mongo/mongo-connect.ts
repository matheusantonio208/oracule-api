/* eslint-disable no-console */
import mongoose from 'mongoose';

class MongoConnect {
  start(): void {
    const connectionUri: string = this.getConnectionUri();

    mongoose.Promise = global.Promise;

    mongoose
      .connect(connectionUri, {
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true,
        useUnifiedTopology: true,
      })
      .then(() => console.log(`Connect with Mongo in ${connectionUri}`))
      .catch((error) => console.log(error));
  }

  getConnectionUri(): string {
    if (process.env.MONGO_HOST) {
      return `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DB_NAME}`;
    }

    return `mongodb://localhost:${process.env.MONGO_PORT}/${process.env.MONGO_DB_NAME}`;
  }
}

export default new MongoConnect();
