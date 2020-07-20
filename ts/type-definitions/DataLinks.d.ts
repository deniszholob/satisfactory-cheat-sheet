export interface DataLinks {
  mainLinks: DataLink[];
  communityLinks: DataLink[];
}

export interface DataLink {
  url: string;
  text: string;
  caption?: string;
}
