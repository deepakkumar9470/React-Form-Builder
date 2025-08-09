export function computeDerived(formValues: Record<string, any>, formula: string) {
  const tokenized = formula.replace(/\{\{(.+?)\}\}/g, (_, fieldId) => {
    const v = formValues[fieldId];
    return typeof v === "string" ? `"${v}"` : v === undefined ? "undefined" : String(v);
  });

  const ageFromDOB = (dobStr: string) => {
    if (!dobStr) return "";
    const dob = new Date(dobStr);
    const now = new Date();
    let age = now.getFullYear() - dob.getFullYear();
    const m = now.getMonth() - dob.getMonth();
    if (m < 0 || (m === 0 && now.getDate() < dob.getDate())) age--;
    return age;
  };

  try {
    // eslint-disable-next-line no-new-func
    const fn = new Function("ageFromDOB", `return (${tokenized});`);
    return fn(ageFromDOB);
  } catch (e) {
    console.error("Derived formula error", e);
    return undefined;
  }
}
