interface testing {
  name: string;
  age: number;
  isActive: boolean;
  hobbies: string[];
  address: {
    street: string;
    city: string;
    zipCode: number;
  };
  getDetails: () => string;
  friends: Array<{
    name: string;
    age: number;
    isCloseFriend: boolean;
  }>;
  metadata?: {
    createdAt: Date;
    updatedAt: Date;
  };
  [key: string]: any; // Allow additional properties
  readonly id: string; // Readonly property
  optionalField?: string; // Optional field
  nestedObject?: {
    nestedField: string;
    nestedArray: Array<number>;
  };
}
