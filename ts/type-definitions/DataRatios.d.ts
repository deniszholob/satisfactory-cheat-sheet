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
