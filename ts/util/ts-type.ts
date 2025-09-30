export type DeepPartial<T> = T extends object
  ? { [P in keyof T]?: DeepPartial<T[P]> }
  : T;

export type EnumId = string | number;

export interface ObjectInfo<T extends EnumId = string> {
  id: T;
  display: string;
}

export interface Link<T extends EnumId = string> extends ObjectInfo<T> {
  url: string;
}
