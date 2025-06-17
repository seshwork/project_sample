interface testing {
  name: string;
  age: number;

  optionalField?: string; // Optional field
  nestedObject?: {
    nestedField: string;
    nestedArray: Array<number>;
  };
}
