export function nullThrows<TValue>(value: TValue | null | undefined): TValue {
  if (value == null) {
    throw new Error("Null value found by nullthrows");
  }
  return value;
}
