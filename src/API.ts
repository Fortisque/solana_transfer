/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateTransactionsInput = {
  id?: string | null,
  from_address: string,
  to_address: string,
  transaction_id: string,
  _version?: number | null,
};

export type ModelTransactionsConditionInput = {
  from_address?: ModelStringInput | null,
  to_address?: ModelStringInput | null,
  transaction_id?: ModelStringInput | null,
  and?: Array< ModelTransactionsConditionInput | null > | null,
  or?: Array< ModelTransactionsConditionInput | null > | null,
  not?: ModelTransactionsConditionInput | null,
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

export type Transactions = {
  __typename: "Transactions",
  id: string,
  from_address: string,
  to_address: string,
  transaction_id: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateTransactionsInput = {
  id: string,
  from_address?: string | null,
  to_address?: string | null,
  transaction_id?: string | null,
  _version?: number | null,
};

export type DeleteTransactionsInput = {
  id: string,
  _version?: number | null,
};

export type ModelTransactionsFilterInput = {
  id?: ModelIDInput | null,
  from_address?: ModelStringInput | null,
  to_address?: ModelStringInput | null,
  transaction_id?: ModelStringInput | null,
  and?: Array< ModelTransactionsFilterInput | null > | null,
  or?: Array< ModelTransactionsFilterInput | null > | null,
  not?: ModelTransactionsFilterInput | null,
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

export type ModelTransactionsConnection = {
  __typename: "ModelTransactionsConnection",
  items:  Array<Transactions | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelSubscriptionTransactionsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  from_address?: ModelSubscriptionStringInput | null,
  to_address?: ModelSubscriptionStringInput | null,
  transaction_id?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTransactionsFilterInput | null > | null,
  or?: Array< ModelSubscriptionTransactionsFilterInput | null > | null,
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

export type CreateTransactionsMutationVariables = {
  input: CreateTransactionsInput,
  condition?: ModelTransactionsConditionInput | null,
};

export type CreateTransactionsMutation = {
  createTransactions?:  {
    __typename: "Transactions",
    id: string,
    from_address: string,
    to_address: string,
    transaction_id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateTransactionsMutationVariables = {
  input: UpdateTransactionsInput,
  condition?: ModelTransactionsConditionInput | null,
};

export type UpdateTransactionsMutation = {
  updateTransactions?:  {
    __typename: "Transactions",
    id: string,
    from_address: string,
    to_address: string,
    transaction_id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteTransactionsMutationVariables = {
  input: DeleteTransactionsInput,
  condition?: ModelTransactionsConditionInput | null,
};

export type DeleteTransactionsMutation = {
  deleteTransactions?:  {
    __typename: "Transactions",
    id: string,
    from_address: string,
    to_address: string,
    transaction_id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type GetTransactionsQueryVariables = {
  id: string,
};

export type GetTransactionsQuery = {
  getTransactions?:  {
    __typename: "Transactions",
    id: string,
    from_address: string,
    to_address: string,
    transaction_id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListTransactionsQueryVariables = {
  filter?: ModelTransactionsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTransactionsQuery = {
  listTransactions?:  {
    __typename: "ModelTransactionsConnection",
    items:  Array< {
      __typename: "Transactions",
      id: string,
      from_address: string,
      to_address: string,
      transaction_id: string,
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

export type SyncTransactionsQueryVariables = {
  filter?: ModelTransactionsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncTransactionsQuery = {
  syncTransactions?:  {
    __typename: "ModelTransactionsConnection",
    items:  Array< {
      __typename: "Transactions",
      id: string,
      from_address: string,
      to_address: string,
      transaction_id: string,
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

export type OnCreateTransactionsSubscriptionVariables = {
  filter?: ModelSubscriptionTransactionsFilterInput | null,
};

export type OnCreateTransactionsSubscription = {
  onCreateTransactions?:  {
    __typename: "Transactions",
    id: string,
    from_address: string,
    to_address: string,
    transaction_id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateTransactionsSubscriptionVariables = {
  filter?: ModelSubscriptionTransactionsFilterInput | null,
};

export type OnUpdateTransactionsSubscription = {
  onUpdateTransactions?:  {
    __typename: "Transactions",
    id: string,
    from_address: string,
    to_address: string,
    transaction_id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteTransactionsSubscriptionVariables = {
  filter?: ModelSubscriptionTransactionsFilterInput | null,
};

export type OnDeleteTransactionsSubscription = {
  onDeleteTransactions?:  {
    __typename: "Transactions",
    id: string,
    from_address: string,
    to_address: string,
    transaction_id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};
