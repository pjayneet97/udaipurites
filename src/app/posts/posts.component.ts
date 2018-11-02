import { Component, OnInit } from '@angular/core';
import { Post } from '../modals/blogpost.modal';
import { post } from 'selenium-webdriver/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts:Post[]=[]
  post=new Post()
  constructor() { }

  ngOnInit() {
    this.getPosts()
    
  }

  getPosts(){
      console.log('getting posts')
      // assign this.posts with posts fetched from database
      this.post.author="jayneet"
      this.post.category="travel"
      this.post.subtitle="travel in udaipur"
      this.post.tags=["udaipurites","udaipur","vaniceofeast"]
      this.post.content="html code"
      this.post.meta=[{type:"description",content:"hello world"}]
      this.post.description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!"
      this.post.title="udaipur wasio i nagari"
      this.post.cover="blank"
      this.posts.push(this.post)
      console.log(this.post)
      
  }

}
