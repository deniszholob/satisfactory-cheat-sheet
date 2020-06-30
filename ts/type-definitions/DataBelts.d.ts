
export interface DataBelt {
  units: string;
  belts: Belt[];
}

export interface Belt {
  name: string;
  rate: number;
  units: string;
}
