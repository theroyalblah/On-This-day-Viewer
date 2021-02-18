export type wikiPageContent = {
  type: string;
  title: string;
  displaytitle: string;
  content_urls: {
    desktop: {
      page: string;
    };
    mobile: {
      page: string;
    };
  };
};

export type wikiContent = {
  text: string;
  pages: Array<wikiPageContent>;
  year: number;
};

export type wikiResponse = {
  selected: Array<wikiContent>;
  births: Array<wikiContent>;
  deaths: Array<wikiContent>;
  events: Array<wikiContent>;
};
