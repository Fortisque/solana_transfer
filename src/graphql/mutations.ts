/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTransfer = /* GraphQL */ `
  mutation CreateTransfer(
    $input: CreateTransferInput!
    $condition: ModelTransferConditionInput
  ) {
    createTransfer(input: $input, condition: $condition) {
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
export const updateTransfer = /* GraphQL */ `
  mutation UpdateTransfer(
    $input: UpdateTransferInput!
    $condition: ModelTransferConditionInput
  ) {
    updateTransfer(input: $input, condition: $condition) {
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
export const deleteTransfer = /* GraphQL */ `
  mutation DeleteTransfer(
    $input: DeleteTransferInput!
    $condition: ModelTransferConditionInput
  ) {
    deleteTransfer(input: $input, condition: $condition) {
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
