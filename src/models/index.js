// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Transfer } = initSchema(schema);

export {
  Transfer
};