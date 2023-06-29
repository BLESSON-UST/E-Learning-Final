import { Topic } from "./Topic";

export class Course {
    id!: number;
    title: string='';
    description: string='';
    topics: Topic[]=[];
  
    constructor(title: string,description: string,topics:Topic[]) {
      this.id=this.id;
      this.title= title ;
      this.description = description ;
      this.topics=topics;
    }
  }

  