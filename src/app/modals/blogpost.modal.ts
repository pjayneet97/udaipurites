export class Post {
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
        this.id=""
        this.author=""
        this.title=""
        this.description=""
        this.subtitle=""
        this.timestamp=null
        this.content="",this.tags=[]
        this.category=""
        this.meta=[{name:"",content:""}]
        this.cover=""
        this.tags=[]
    }
}