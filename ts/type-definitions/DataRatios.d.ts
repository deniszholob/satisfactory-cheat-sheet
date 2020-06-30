export interface product {
  out: any;
  in: any;
  machine: string;
}

export interface ProductionItem {
  name: string;
  machine: string;
  count: number;
}
export interface ProductionItemSet {
  productionItems: ProductionItem[];
  link?: string;
  trueRatio?: boolean;
}
