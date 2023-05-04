import { notEmpty } from "./notEmpty";

export function filterNulls<TValue>(
  value: Array<TValue | null | undefined> | null | undefined
): Array<TValue> {
  return value?.filter(notEmpty) ?? [];
}
