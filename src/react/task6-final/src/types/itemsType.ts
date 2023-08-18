export type ItemsType = {
  id?: number;
  name: string;
  qtde: number;
  price: number;
  cat: string;
  desc: string;
  createdAt?: string | Date | number | ((date?: Date, locale?: string) => string);
  updatedAt?: string | Date | number | ((date?: Date, locale?: string) => string);
};