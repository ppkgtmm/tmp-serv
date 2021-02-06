import { MongoClient, Db } from 'mongodb';
import { InternalServerErrorException, Provider } from '@nestjs/common';

export const databaseProviders: Provider[] = [{
    provide: 'DATABASE_CONNECTION',
    useFactory: async (): Promise<Db> => {
          try {
              const client = await MongoClient.connect(process.env.MONGO_URI, {
                  useUnifiedTopology: true
              });
              return client.db('shop');
          } catch (e) {
              console.log(e);
              throw new InternalServerErrorException();
          }
      }
}]