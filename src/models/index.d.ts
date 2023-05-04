import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerTransfers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Transfers, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly from_address: string;
  readonly to_address: string;
  readonly signature: string;
  readonly amount: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTransfers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Transfers, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly from_address: string;
  readonly to_address: string;
  readonly signature: string;
  readonly amount: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Transfers = LazyLoading extends LazyLoadingDisabled ? EagerTransfers : LazyTransfers

export declare const Transfers: (new (init: ModelInit<Transfers>) => Transfers) & {
  copyOf(source: Transfers, mutator: (draft: MutableModel<Transfers>) => MutableModel<Transfers> | void): Transfers;
}