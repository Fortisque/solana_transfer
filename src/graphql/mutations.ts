/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTransfers = /* GraphQL */ `
  mutation CreateTransfers(
    $input: CreateTransfersInput!
    $condition: ModelTransfersConditionInput
  ) {
    createTransfers(input: $input, condition: $condition) {
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
export const updateTransfers = /* GraphQL */ `
  mutation UpdateTransfers(
    $input: UpdateTransfersInput!
    $condition: ModelTransfersConditionInput
  ) {
    updateTransfers(input: $input, condition: $condition) {
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
export const deleteTransfers = /* GraphQL */ `
  mutation DeleteTransfers(
    $input: DeleteTransfersInput!
    $condition: ModelTransfersConditionInput
  ) {
    deleteTransfers(input: $input, condition: $condition) {
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
