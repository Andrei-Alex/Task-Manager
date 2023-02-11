export interface Ipresentation {
  presentation: {
    title: string,
    description: string;
    version: string;
    listTitle: string;
    listElements: {id : string, title:string, content: string}[];
    techTitle: string;
    techList: {id: string, value: string}[]
  }

}
