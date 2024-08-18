export interface Product {
  id: number;
  name: string;
  version: string;
  description: string;
  createdDate?: Date; // Optional field, hence the ?
  modifiedDate?: Date; // Optional field, hence the ?
  isActive: boolean;
  isDeleted: boolean;
}
