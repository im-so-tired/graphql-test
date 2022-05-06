import React from "react";
import { useField } from "formik";
interface MyTextProps {
  label: string;
  name: string;
  type: string;
  autoComplete?: string;
  pattern?: string;
  title?: string;
}
export const MyTextField: React.FC<MyTextProps> = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props);
  return (
    <div className="form-group">
      <label>
        {label}
        <input
          {...field}
          {...props}
          className={meta.touched && meta.error ? "input-error" : ""}
        />
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};
