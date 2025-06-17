interface testing {
  name: string;
  age: number;
  isActive: boolean;
  hobbies: string[];
  [key: string]: any; // Allow additional properties
  readonly id: string; // Readonly property
  optionalField?: string; // Optional field
  nestedObject?: {
    nestedField: string;
    nestedArray: Array<number>;
  };
}
