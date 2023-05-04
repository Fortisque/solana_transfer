/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TransferCreateFormInputValues = {
    from_address?: string;
    to_address?: string;
    signature?: string;
    amount_in_sol?: number;
};
export declare type TransferCreateFormValidationValues = {
    from_address?: ValidationFunction<string>;
    to_address?: ValidationFunction<string>;
    signature?: ValidationFunction<string>;
    amount_in_sol?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TransferCreateFormOverridesProps = {
    TransferCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    from_address?: PrimitiveOverrideProps<TextFieldProps>;
    to_address?: PrimitiveOverrideProps<TextFieldProps>;
    signature?: PrimitiveOverrideProps<TextFieldProps>;
    amount_in_sol?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TransferCreateFormProps = React.PropsWithChildren<{
    overrides?: TransferCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TransferCreateFormInputValues) => TransferCreateFormInputValues;
    onSuccess?: (fields: TransferCreateFormInputValues) => void;
    onError?: (fields: TransferCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TransferCreateFormInputValues) => TransferCreateFormInputValues;
    onValidate?: TransferCreateFormValidationValues;
} & React.CSSProperties>;
export default function TransferCreateForm(props: TransferCreateFormProps): React.ReactElement;
