import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerTransfer = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Transfer, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly from_address: string;
  readonly to_address: string;
  readonly signature: string;
  readonly amount_in_sol: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTransfer = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Transfer, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly from_address: string;
  readonly to_address: string;
  readonly signature: string;
  readonly amount_in_sol: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Transfer = LazyLoading extends LazyLoadingDisabled ? EagerTransfer : LazyTransfer

export declare const Transfer: (new (init: ModelInit<Transfer>) => Transfer) & {
  copyOf(source: Transfer, mutator: (draft: MutableModel<Transfer>) => MutableModel<Transfer> | void): Transfer;
}