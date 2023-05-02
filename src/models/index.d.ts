import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerTransactions = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Transactions, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly from_address: string;
  readonly to_address: string;
  readonly transaction_id: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTransactions = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Transactions, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly from_address: string;
  readonly to_address: string;
  readonly transaction_id: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Transactions = LazyLoading extends LazyLoadingDisabled ? EagerTransactions : LazyTransactions

export declare const Transactions: (new (init: ModelInit<Transactions>) => Transactions) & {
  copyOf(source: Transactions, mutator: (draft: MutableModel<Transactions>) => MutableModel<Transactions> | void): Transactions;
}