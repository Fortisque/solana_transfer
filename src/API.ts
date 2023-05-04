/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateTransferInput = {
  id?: string | null,
  from_address: string,
  to_address: string,
  signature: string,
  amount_in_sol: number,
  _version?: number | null,
};

export type ModelTransferConditionInput = {
  from_address?: ModelStringInput | null,
  to_address?: ModelStringInput | null,
  signature?: ModelStringInput | null,
  amount_in_sol?: ModelFloatInput | null,
  and?: Array< ModelTransferConditionInput | null > | null,
  or?: Array< ModelTransferConditionInput | null > | null,
  not?: ModelTransferConditionInput | null,
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

export type Transfer = {
  __typename: "Transfer",
  id: string,
  from_address: string,
  to_address: string,
  signature: string,
  amount_in_sol: number,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateTransferInput = {
  id: string,
  from_address?: string | null,
  to_address?: string | null,
  signature?: string | null,
  amount_in_sol?: number | null,
  _version?: number | null,
};

export type DeleteTransferInput = {
  id: string,
  _version?: number | null,
};

export type ModelTransferFilterInput = {
  id?: ModelIDInput | null,
  from_address?: ModelStringInput | null,
  to_address?: ModelStringInput | null,
  signature?: ModelStringInput | null,
  amount_in_sol?: ModelFloatInput | null,
  and?: Array< ModelTransferFilterInput | null > | null,
  or?: Array< ModelTransferFilterInput | null > | null,
  not?: ModelTransferFilterInput | null,
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

export type ModelTransferConnection = {
  __typename: "ModelTransferConnection",
  items:  Array<Transfer | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelSubscriptionTransferFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  from_address?: ModelSubscriptionStringInput | null,
  to_address?: ModelSubscriptionStringInput | null,
  signature?: ModelSubscriptionStringInput | null,
  amount_in_sol?: ModelSubscriptionFloatInput | null,
  and?: Array< ModelSubscriptionTransferFilterInput | null > | null,
  or?: Array< ModelSubscriptionTransferFilterInput | null > | null,
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

export type CreateTransferMutationVariables = {
  input: CreateTransferInput,
  condition?: ModelTransferConditionInput | null,
};

export type CreateTransferMutation = {
  createTransfer?:  {
    __typename: "Transfer",
    id: string,
    from_address: string,
    to_address: string,
    signature: string,
    amount_in_sol: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateTransferMutationVariables = {
  input: UpdateTransferInput,
  condition?: ModelTransferConditionInput | null,
};

export type UpdateTransferMutation = {
  updateTransfer?:  {
    __typename: "Transfer",
    id: string,
    from_address: string,
    to_address: string,
    signature: string,
    amount_in_sol: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteTransferMutationVariables = {
  input: DeleteTransferInput,
  condition?: ModelTransferConditionInput | null,
};

export type DeleteTransferMutation = {
  deleteTransfer?:  {
    __typename: "Transfer",
    id: string,
    from_address: string,
    to_address: string,
    signature: string,
    amount_in_sol: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type GetTransferQueryVariables = {
  id: string,
};

export type GetTransferQuery = {
  getTransfer?:  {
    __typename: "Transfer",
    id: string,
    from_address: string,
    to_address: string,
    signature: string,
    amount_in_sol: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListTransfersQueryVariables = {
  filter?: ModelTransferFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTransfersQuery = {
  listTransfers?:  {
    __typename: "ModelTransferConnection",
    items:  Array< {
      __typename: "Transfer",
      id: string,
      from_address: string,
      to_address: string,
      signature: string,
      amount_in_sol: number,
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
  filter?: ModelTransferFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncTransfersQuery = {
  syncTransfers?:  {
    __typename: "ModelTransferConnection",
    items:  Array< {
      __typename: "Transfer",
      id: string,
      from_address: string,
      to_address: string,
      signature: string,
      amount_in_sol: number,
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

export type OnCreateTransferSubscriptionVariables = {
  filter?: ModelSubscriptionTransferFilterInput | null,
};

export type OnCreateTransferSubscription = {
  onCreateTransfer?:  {
    __typename: "Transfer",
    id: string,
    from_address: string,
    to_address: string,
    signature: string,
    amount_in_sol: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateTransferSubscriptionVariables = {
  filter?: ModelSubscriptionTransferFilterInput | null,
};

export type OnUpdateTransferSubscription = {
  onUpdateTransfer?:  {
    __typename: "Transfer",
    id: string,
    from_address: string,
    to_address: string,
    signature: string,
    amount_in_sol: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteTransferSubscriptionVariables = {
  filter?: ModelSubscriptionTransferFilterInput | null,
};

export type OnDeleteTransferSubscription = {
  onDeleteTransfer?:  {
    __typename: "Transfer",
    id: string,
    from_address: string,
    to_address: string,
    signature: string,
    amount_in_sol: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};
