/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTransfers = /* GraphQL */ `
  subscription OnCreateTransfers(
    $filter: ModelSubscriptionTransfersFilterInput
  ) {
    onCreateTransfers(filter: $filter) {
      id
      from_address
      to_address
      signature
      amount
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateTransfers = /* GraphQL */ `
  subscription OnUpdateTransfers(
    $filter: ModelSubscriptionTransfersFilterInput
  ) {
    onUpdateTransfers(filter: $filter) {
      id
      from_address
      to_address
      signature
      amount
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteTransfers = /* GraphQL */ `
  subscription OnDeleteTransfers(
    $filter: ModelSubscriptionTransfersFilterInput
  ) {
    onDeleteTransfers(filter: $filter) {
      id
      from_address
      to_address
      signature
      amount
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
