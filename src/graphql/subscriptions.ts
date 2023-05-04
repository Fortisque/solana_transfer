/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTransfer = /* GraphQL */ `
  subscription OnCreateTransfer($filter: ModelSubscriptionTransferFilterInput) {
    onCreateTransfer(filter: $filter) {
      id
      from_address
      to_address
      signature
      amount_in_sol
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateTransfer = /* GraphQL */ `
  subscription OnUpdateTransfer($filter: ModelSubscriptionTransferFilterInput) {
    onUpdateTransfer(filter: $filter) {
      id
      from_address
      to_address
      signature
      amount_in_sol
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteTransfer = /* GraphQL */ `
  subscription OnDeleteTransfer($filter: ModelSubscriptionTransferFilterInput) {
    onDeleteTransfer(filter: $filter) {
      id
      from_address
      to_address
      signature
      amount_in_sol
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
