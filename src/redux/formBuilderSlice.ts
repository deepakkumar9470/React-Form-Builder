import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import type { FieldSchema, FormSchema } from "../types/types";
const initialState: FormSchema = {
  id: uuidv4(),
  name: "Untitled Form",
  createdAt: new Date().toISOString(),
  fields: [],
};

const formBuilderSlice = createSlice({
  name: "formBuilder",
  initialState,
  reducers: {
    addField: (state, action: PayloadAction<FieldSchema>) => {
      state.fields.push(action.payload);
    },
    updateField: (
      state,
      action: PayloadAction<{ id: string; updates: Partial<FieldSchema> }>
    ) => {
      const index = state.fields.findIndex((f) => f.id === action.payload.id);
      if (index !== -1) {
        state.fields[index] = {
          ...state.fields[index],
          ...action.payload.updates,
        };
      }
    },
    removeField: (state, action: PayloadAction<string>) => {
      state.fields = state.fields.filter((f) => f.id !== action.payload);
    },
    reorderFields: (
      state,
      action: PayloadAction<{ fromIndex: number; toIndex: number }>
    ) => {
      const { fromIndex, toIndex } = action.payload;
      const field = state.fields.splice(fromIndex, 1)[0];
      state.fields.splice(toIndex, 0, field);
    },

    updateFormName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
  },
});

export const {
  addField,
  updateField,
  removeField,
  reorderFields,
  updateFormName,
} = formBuilderSlice.actions;

export default formBuilderSlice.reducer;
