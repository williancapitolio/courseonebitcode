export type ItemsType = {
  id?: number;
  name: string;
  qtde: number;
  price: number;
  cat: string;
  desc: string;
  createdAt?: string | Date | ((date?: Date, locale?: string) => string);
  updatedAt?: string | Date | ((date?: Date, locale?: string) => string);
};