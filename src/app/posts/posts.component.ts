import { Component, OnInit } from '@angular/core';
import { Post } from '../modals/blogpost.modal';
import { BlogpostService } from "../services/blogpost.service"

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  constructor(public postservice:BlogpostService) { }

  ngOnInit() {    
    
  }



}
