/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTransfer = /* GraphQL */ `
  query GetTransfer($id: ID!) {
    getTransfer(id: $id) {
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
export const listTransfers = /* GraphQL */ `
  query ListTransfers(
    $filter: ModelTransferFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTransfers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncTransfers = /* GraphQL */ `
  query SyncTransfers(
    $filter: ModelTransferFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTransfers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
