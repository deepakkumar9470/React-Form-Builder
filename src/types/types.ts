export type FieldType =
  | "text"
  | "number"
  | "textarea"
  | "select"
  | "radio"
  | "checkbox"
  | "date";

export interface ValidationRule {
  id: string;
  type: "required" | "minLength" | "maxLength" | "email" | "passwordCustom" | "min" | "max";
  value?: string | number;
  message?: string;
}

export interface Field {
  id: number;
  label: string;
  type: string;
}

export interface Option {
  id: string;
  label: string;
  value: string;
}

export interface DerivedConfig {
  isDerived: boolean;
  parents: string[];
  formula: string;
}

export interface FieldSchema {
  id: string; 
  type: FieldType;
  label: string;
  required?: boolean;
  defaultValue?: any;
  options?: Option[]; 
  validations?: ValidationRule[];
  derived?: DerivedConfig;
  order?: number;
}

export interface FormSchema {
  id: string;
  name: string;
  createdAt: string; 
  fields: FieldSchema[];
}

