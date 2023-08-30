import type { FormCheckboxVariant } from "@/types/form-checkbox-variant";

export interface FormCheckboxListItem {
  id: number;
  title: string;
  visible: boolean;
  variant?: FormCheckboxVariant;
  disabled?: boolean;
}
