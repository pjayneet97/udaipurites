export class Post {
    author:string;
    timestamp:Date
    title:string
    subtitle:string
    category:string
    meta:{type:string,content:string}[]
    tags:string[]
    description:string
    cover:string
    content:string
    constructor() { 
        this.author=""
        this.title=""
        this.description=""
        this.subtitle=""
        this.timestamp=null
        this.content="",this.tags=[]
        this.category=""
        this.meta=[{type:"",content:""}]
        this.cover=""
        this.tags=[]
    }
}