export type wikiContent = {
  text: string;
  pages: any;
  year: number;
};

export type wikiResponse = {
  selected: Array<wikiContent>;
  births: Array<wikiContent>;
  deaths: Array<wikiContent>;
  events: Array<wikiContent>;
};
