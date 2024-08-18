export interface licenseInterface {
  id: number;
  key: string;
  productId: number;
  userId: number;
  createdDate?: Date;
  modifiedDate?: Date;
  isActive: boolean;
  isDeleted: boolean;
}
