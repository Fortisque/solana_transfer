// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Transactions } = initSchema(schema);

export {
  Transactions
};