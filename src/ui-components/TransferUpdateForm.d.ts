/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Transfer } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TransferUpdateFormInputValues = {
    from_address?: string;
    to_address?: string;
    signature?: string;
    amount_in_sol?: number;
};
export declare type TransferUpdateFormValidationValues = {
    from_address?: ValidationFunction<string>;
    to_address?: ValidationFunction<string>;
    signature?: ValidationFunction<string>;
    amount_in_sol?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TransferUpdateFormOverridesProps = {
    TransferUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    from_address?: PrimitiveOverrideProps<TextFieldProps>;
    to_address?: PrimitiveOverrideProps<TextFieldProps>;
    signature?: PrimitiveOverrideProps<TextFieldProps>;
    amount_in_sol?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TransferUpdateFormProps = React.PropsWithChildren<{
    overrides?: TransferUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    transfer?: Transfer;
    onSubmit?: (fields: TransferUpdateFormInputValues) => TransferUpdateFormInputValues;
    onSuccess?: (fields: TransferUpdateFormInputValues) => void;
    onError?: (fields: TransferUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TransferUpdateFormInputValues) => TransferUpdateFormInputValues;
    onValidate?: TransferUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TransferUpdateForm(props: TransferUpdateFormProps): React.ReactElement;
