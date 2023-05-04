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
export declare type TransfersCreateFormInputValues = {
    from_address?: string;
    to_address?: string;
    signature?: string;
    amount?: number;
};
export declare type TransfersCreateFormValidationValues = {
    from_address?: ValidationFunction<string>;
    to_address?: ValidationFunction<string>;
    signature?: ValidationFunction<string>;
    amount?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TransfersCreateFormOverridesProps = {
    TransfersCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    from_address?: PrimitiveOverrideProps<TextFieldProps>;
    to_address?: PrimitiveOverrideProps<TextFieldProps>;
    signature?: PrimitiveOverrideProps<TextFieldProps>;
    amount?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TransfersCreateFormProps = React.PropsWithChildren<{
    overrides?: TransfersCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TransfersCreateFormInputValues) => TransfersCreateFormInputValues;
    onSuccess?: (fields: TransfersCreateFormInputValues) => void;
    onError?: (fields: TransfersCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TransfersCreateFormInputValues) => TransfersCreateFormInputValues;
    onValidate?: TransfersCreateFormValidationValues;
} & React.CSSProperties>;
export default function TransfersCreateForm(props: TransfersCreateFormProps): React.ReactElement;
