import type { ValidationRule } from "../types/types";

export function validateField(value: any, rules?: ValidationRule[]): string | null {
  if (!rules || rules.length === 0) return null;
  for (const r of rules) {
    if (r.type === "required") {
      if (value === undefined || value === null || value === "") return r.message || "This field is required";
    }
    if (r.type === "minLength" && typeof value === "string") {
      if (value.length < Number(r.value)) return r.message || `Minimum length ${r.value}`;
    }
    if (r.type === "maxLength" && typeof value === "string") {
      if (value.length > Number(r.value)) return r.message || `Maximum length ${r.value}`;
    }
    if (r.type === "email" && typeof value === "string") {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!re.test(value)) return r.message || "Invalid email";
    }
    if (r.type === "passwordCustom" && typeof value === "string") {
      const min = Number(r.value || 8);
      if (value.length < min) return r.message || `Must be at least ${min} chars`;
      if (!/\d/.test(value)) return r.message || "Must contain at least one number";
    }
    if (r.type === "min" && typeof value === "number") {
      if (value < Number(r.value)) return r.message || `Minimum ${r.value}`;
    }
    if (r.type === "max" && typeof value === "number") {
      if (value > Number(r.value)) return r.message || `Maximum ${r.value}`;
    }
  }
  return null;
}
