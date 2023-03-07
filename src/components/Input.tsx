import React, { InputHTMLAttributes } from "react";

/**
 * Components
 */
import Spinner from "./Spinner";

/**
 * Styles
 */
import theme from "@/styles/theme";

/**
 * Types
 */
export type Ref = HTMLInputElement;

export type Props<T> = {
  id: string;
  invalid?: boolean;
  loading?: boolean;
} & InputHTMLAttributes<T>;

const Input: React.FC<Props<Ref>> = React.forwardRef<Ref, Props<Ref>>(
  ({ invalid, loading, ...inputProps }) => {
    const containerClasses = ["form-group"];

    if (inputProps.value || inputProps.defaultValue) {
      containerClasses.push("has-value");
    }

    if (invalid) {
      containerClasses.push("is-invalid");
    }

    if (loading) {
      containerClasses.push("is-loading");
    }

    return (
      <div className={containerClasses.join(" ")}>
        {loading && <Spinner color={theme.colors.primary} size={24} />}

        <input {...inputProps} />

        <style jsx>{`
          .form-group {
            position: relative;
            width: 100%;
          }

          input {
            color: #444;
            font-size: 16px;
            background: #fff;
            border: 1px solid #ccc;
            border-radius: 40px 0 0 40px;
            padding: 0px 0px 0px 15px;
            width: 100%;
            height: 40px;
            margin: 0;
            appearance: none;
            transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
          }

          input:focus,
          input:active {
            outline: none;
          }

          input:focus {
            border-color: ${theme.colors.secondary};
          }

          .has-label.has-value input,
          input:-webkit-autofill {
            padding-top: 24px;
            padding-bottom: 0;
          }

          input[disabled] ~ :global(label),
          input[disabled] {
            opacity: 0.4;
            cursor: default;
          }

          input[disabled] {
            background: #e9e9e9;
          }

          .is-invalid :global(label),
          .is-invalid input {
            color: ${theme.colors.invalid};
            border-bottom-color: ${theme.colors.invalid};
          }

          .is-loading :global(.loader-container) {
            position: absolute;
            right: 16px;
            top: 0;
            bottom: 0;
            margin: auto;
            width: 24px;
            height: 24px;
          }

          .is-loading input {
            padding-right: 48px;
          }
        `}</style>
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
