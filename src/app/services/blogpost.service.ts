import { Injectable } from '@angular/core';
import { Post } from '../modals/blogpost.modal';

@Injectable({
  providedIn: 'root'
})
export class BlogpostService {
  posts: Post[]=[]
  constructor() {
    let post = new Post()
      post.author="jayneet"
      post.category="travel"
      post.subtitle="travel in udaipur"
      post.tags=["udaipurites","udaipur","vaniceofeast"]
      post.content="html code"
      post.meta=[{name:"description",content:"hello world"}]
      post.description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!"
      post.title="jeelo ki nagari Udaipur"
      post.id=post.title.replace(/ /g, '-')
      post.cover="https://www.reisefieber.net/wp-content/uploads/2017/10/lake-pichola-udaipur-rajasthan-indien-900x300.jpg"
      this.posts.push(post)
   }
   getPost(id:string){
     return this.posts.find(tmp=>tmp.id==id)     
   }
}
