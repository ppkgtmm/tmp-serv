import { InternalServerErrorException, Module } from '@nestjs/common';
import { MongoClient, Db } from 'mongodb';

@Module({
    providers: [
        {
          provide: 'DATABASE_CONNECTION',
          useFactory: async (): Promise<Db> => {
                try {
                    const client = await MongoClient.connect(process.env.MONGO_URI, {
                        useUnifiedTopology: true
                    });
                    return client.db('shop');
                } catch (e) {
                    console.log(e);
                    throw new InternalServerErrorException;
                }
            }
        },
    ],
      exports: ['DATABASE_CONNECTION'],
})
export class DatabaseModule { }

