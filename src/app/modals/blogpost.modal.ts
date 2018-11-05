export class Post {
    fid:string
    id:string
    author:string;
    timestamp:Date
    title:string
    subtitle:string
    category:string
    meta:{name:string,content:string}[]
    tags:string[]
    description:string
    cover:string
    content:string
    constructor() { 
        this.fid="",this.author="jayneet",this.timestamp=null,this.meta=[],this.tags=[],this.title="",this.subtitle="",this.description="",this.content="",this.cover="",this.id="",this.category=""
    }
}