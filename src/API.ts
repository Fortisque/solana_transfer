/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateTransfersInput = {
  id?: string | null,
  from_address: string,
  to_address: string,
  signature: string,
  amount: number,
  _version?: number | null,
};

export type ModelTransfersConditionInput = {
  from_address?: ModelStringInput | null,
  to_address?: ModelStringInput | null,
  signature?: ModelStringInput | null,
  amount?: ModelFloatInput | null,
  and?: Array< ModelTransfersConditionInput | null > | null,
  or?: Array< ModelTransfersConditionInput | null > | null,
  not?: ModelTransfersConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Transfers = {
  __typename: "Transfers",
  id: string,
  from_address: string,
  to_address: string,
  signature: string,
  amount: number,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateTransfersInput = {
  id: string,
  from_address?: string | null,
  to_address?: string | null,
  signature?: string | null,
  amount?: number | null,
  _version?: number | null,
};

export type DeleteTransfersInput = {
  id: string,
  _version?: number | null,
};

export type ModelTransfersFilterInput = {
  id?: ModelIDInput | null,
  from_address?: ModelStringInput | null,
  to_address?: ModelStringInput | null,
  signature?: ModelStringInput | null,
  amount?: ModelFloatInput | null,
  and?: Array< ModelTransfersFilterInput | null > | null,
  or?: Array< ModelTransfersFilterInput | null > | null,
  not?: ModelTransfersFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelTransfersConnection = {
  __typename: "ModelTransfersConnection",
  items:  Array<Transfers | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelSubscriptionTransfersFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  from_address?: ModelSubscriptionStringInput | null,
  to_address?: ModelSubscriptionStringInput | null,
  signature?: ModelSubscriptionStringInput | null,
  amount?: ModelSubscriptionFloatInput | null,
  and?: Array< ModelSubscriptionTransfersFilterInput | null > | null,
  or?: Array< ModelSubscriptionTransfersFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type CreateTransfersMutationVariables = {
  input: CreateTransfersInput,
  condition?: ModelTransfersConditionInput | null,
};

export type CreateTransfersMutation = {
  createTransfers?:  {
    __typename: "Transfers",
    id: string,
    from_address: string,
    to_address: string,
    signature: string,
    amount: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateTransfersMutationVariables = {
  input: UpdateTransfersInput,
  condition?: ModelTransfersConditionInput | null,
};

export type UpdateTransfersMutation = {
  updateTransfers?:  {
    __typename: "Transfers",
    id: string,
    from_address: string,
    to_address: string,
    signature: string,
    amount: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteTransfersMutationVariables = {
  input: DeleteTransfersInput,
  condition?: ModelTransfersConditionInput | null,
};

export type DeleteTransfersMutation = {
  deleteTransfers?:  {
    __typename: "Transfers",
    id: string,
    from_address: string,
    to_address: string,
    signature: string,
    amount: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type GetTransfersQueryVariables = {
  id: string,
};

export type GetTransfersQuery = {
  getTransfers?:  {
    __typename: "Transfers",
    id: string,
    from_address: string,
    to_address: string,
    signature: string,
    amount: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListTransfersQueryVariables = {
  filter?: ModelTransfersFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTransfersQuery = {
  listTransfers?:  {
    __typename: "ModelTransfersConnection",
    items:  Array< {
      __typename: "Transfers",
      id: string,
      from_address: string,
      to_address: string,
      signature: string,
      amount: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncTransfersQueryVariables = {
  filter?: ModelTransfersFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncTransfersQuery = {
  syncTransfers?:  {
    __typename: "ModelTransfersConnection",
    items:  Array< {
      __typename: "Transfers",
      id: string,
      from_address: string,
      to_address: string,
      signature: string,
      amount: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateTransfersSubscriptionVariables = {
  filter?: ModelSubscriptionTransfersFilterInput | null,
};

export type OnCreateTransfersSubscription = {
  onCreateTransfers?:  {
    __typename: "Transfers",
    id: string,
    from_address: string,
    to_address: string,
    signature: string,
    amount: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateTransfersSubscriptionVariables = {
  filter?: ModelSubscriptionTransfersFilterInput | null,
};

export type OnUpdateTransfersSubscription = {
  onUpdateTransfers?:  {
    __typename: "Transfers",
    id: string,
    from_address: string,
    to_address: string,
    signature: string,
    amount: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteTransfersSubscriptionVariables = {
  filter?: ModelSubscriptionTransfersFilterInput | null,
};

export type OnDeleteTransfersSubscription = {
  onDeleteTransfers?:  {
    __typename: "Transfers",
    id: string,
    from_address: string,
    to_address: string,
    signature: string,
    amount: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};
