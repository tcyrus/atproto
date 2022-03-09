interface Schema<T> {
  parse: (obj: unknown) => T
  safeParse: (obj: unknown) => { success: boolean }
}

export const is = <T>(obj: unknown, schema: Schema<T>): obj is T => {
  return schema.safeParse(obj).success
}

export const assure =
  <T>(schema: Schema<T>) =>
  (obj: unknown): T => {
    return schema.parse(obj)
  }
