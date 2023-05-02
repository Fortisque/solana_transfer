import React, { ReactElement, useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import { Amplify } from "aws-amplify";
import config from "./aws-exports";
import { createTransactions, deleteTransactions } from "./graphql/mutations";
import { listTransactions } from "./graphql/queries";
import { API } from "aws-amplify";
import { ListTransactionsQuery, Transactions } from "./API";
import {
  Button,
  Flex,
  Heading,
  Text,
  TextField,
  View,
} from "@aws-amplify/ui-react";
import { notEmpty } from "./common_helpers/notEmpty";
Amplify.configure(config);

function App(): ReactElement {
  const [transactions, setTransactions] = useState<Array<Transactions>>([]);

  async function fetchTransactions() {
    const apiData = (await API.graphql({
      query: listTransactions,
    })) as {
      data: ListTransactionsQuery;
    };
    const transactionsFromAPI = (
      apiData.data.listTransactions?.items ?? []
    ).filter(notEmpty);
    setTransactions(transactionsFromAPI);
  }

  useEffect(() => {
    fetchTransactions();
  }, []);

  async function createTransaction(event: {
    preventDefault: () => void;
    target: HTMLFormElement;
  }) {
    event.preventDefault();
    const form = new FormData(event.target);
    const data = {
      from_address: form.get("from_address"),
      to_address: form.get("to_address"),
      transaction_id: form.get("transaction_id"),
    };
    await API.graphql({
      query: createTransactions,
      variables: { input: data },
    });
    fetchTransactions();
    event.target.reset();
  }

  async function deleteTransaction({ id }: { id: string }) {
    const newTransactions = transactions.filter((note) => note.id !== id);
    setTransactions(newTransactions);
    await API.graphql({
      query: deleteTransactions,
      variables: { input: { id } },
    });
  }

  return (
    <View className="App">
      <Heading level={1}>My Transactions App</Heading>
      <View as="form" margin="3rem 0" onSubmit={createTransaction}>
        <Flex direction="row" justifyContent="center">
          <TextField
            name="from_address"
            placeholder="From Address"
            label="From Address"
            labelHidden
            variation="quiet"
            required
          />
          <TextField
            name="to_address"
            placeholder="To Address"
            label="To Address"
            labelHidden
            variation="quiet"
            required
          />
          <TextField
            name="transaction_id"
            placeholder="Transaction ID"
            label="Transaction ID"
            labelHidden
            variation="quiet"
            required
          />
          <Button type="submit" variation="primary">
            Create Note
          </Button>
        </Flex>
      </View>
      <Heading level={2}>Current Transactions</Heading>
      <View margin="3rem 0">
        {transactions.map((transaction) => (
          <Flex
            key={transaction.id}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Text as="strong" fontWeight={700}>
              {transaction.from_address}
            </Text>
            <Text as="span">{transaction.to_address}</Text>
            <Button variation="link" onClick={() => deleteTransaction(transaction)}>
              Delete note
            </Button>
          </Flex>
        ))}
      </View>
    </View>
  );
}

export default App;
