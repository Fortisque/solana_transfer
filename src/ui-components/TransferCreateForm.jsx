/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Transfer } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function TransferCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    from_address: "",
    to_address: "",
    signature: "",
    amount_in_sol: "",
  };
  const [from_address, setFrom_address] = React.useState(
    initialValues.from_address
  );
  const [to_address, setTo_address] = React.useState(initialValues.to_address);
  const [signature, setSignature] = React.useState(initialValues.signature);
  const [amount_in_sol, setAmount_in_sol] = React.useState(
    initialValues.amount_in_sol
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setFrom_address(initialValues.from_address);
    setTo_address(initialValues.to_address);
    setSignature(initialValues.signature);
    setAmount_in_sol(initialValues.amount_in_sol);
    setErrors({});
  };
  const validations = {
    from_address: [{ type: "Required" }],
    to_address: [{ type: "Required" }],
    signature: [{ type: "Required" }],
    amount_in_sol: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          from_address,
          to_address,
          signature,
          amount_in_sol,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(new Transfer(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "TransferCreateForm")}
      {...rest}
    >
      <TextField
        label="From address"
        isRequired={true}
        isReadOnly={false}
        value={from_address}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              from_address: value,
              to_address,
              signature,
              amount_in_sol,
            };
            const result = onChange(modelFields);
            value = result?.from_address ?? value;
          }
          if (errors.from_address?.hasError) {
            runValidationTasks("from_address", value);
          }
          setFrom_address(value);
        }}
        onBlur={() => runValidationTasks("from_address", from_address)}
        errorMessage={errors.from_address?.errorMessage}
        hasError={errors.from_address?.hasError}
        {...getOverrideProps(overrides, "from_address")}
      ></TextField>
      <TextField
        label="To address"
        isRequired={true}
        isReadOnly={false}
        value={to_address}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              from_address,
              to_address: value,
              signature,
              amount_in_sol,
            };
            const result = onChange(modelFields);
            value = result?.to_address ?? value;
          }
          if (errors.to_address?.hasError) {
            runValidationTasks("to_address", value);
          }
          setTo_address(value);
        }}
        onBlur={() => runValidationTasks("to_address", to_address)}
        errorMessage={errors.to_address?.errorMessage}
        hasError={errors.to_address?.hasError}
        {...getOverrideProps(overrides, "to_address")}
      ></TextField>
      <TextField
        label="Signature"
        isRequired={true}
        isReadOnly={false}
        value={signature}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              from_address,
              to_address,
              signature: value,
              amount_in_sol,
            };
            const result = onChange(modelFields);
            value = result?.signature ?? value;
          }
          if (errors.signature?.hasError) {
            runValidationTasks("signature", value);
          }
          setSignature(value);
        }}
        onBlur={() => runValidationTasks("signature", signature)}
        errorMessage={errors.signature?.errorMessage}
        hasError={errors.signature?.hasError}
        {...getOverrideProps(overrides, "signature")}
      ></TextField>
      <TextField
        label="Amount in sol"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={amount_in_sol}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              from_address,
              to_address,
              signature,
              amount_in_sol: value,
            };
            const result = onChange(modelFields);
            value = result?.amount_in_sol ?? value;
          }
          if (errors.amount_in_sol?.hasError) {
            runValidationTasks("amount_in_sol", value);
          }
          setAmount_in_sol(value);
        }}
        onBlur={() => runValidationTasks("amount_in_sol", amount_in_sol)}
        errorMessage={errors.amount_in_sol?.errorMessage}
        hasError={errors.amount_in_sol?.hasError}
        {...getOverrideProps(overrides, "amount_in_sol")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
