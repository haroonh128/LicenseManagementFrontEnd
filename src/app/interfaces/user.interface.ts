export interface user {
  id: number;
  email: string;
  userName?: string; // Optional field
  password: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  role: string;
  createdDate?: Date; // Optional field
  modifiedDate?: Date; // Optional field
  isActive: boolean;
  isDeleted: boolean;
}
