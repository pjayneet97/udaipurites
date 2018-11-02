import { Component, OnInit } from '@angular/core';
import { Post } from '../../modals/blogpost.modal';
import { BlogpostService } from '../../services/blogpost.service';
import { ActivatedRoute } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  post = new Post()
  constructor(public postservice:BlogpostService,public route:ActivatedRoute,public meta:Meta,public title:Title) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.post=this.postservice.getPost(id)
    this.title.setTitle(this.post.title)
    this.meta.addTags(this.post.meta)
  }

}
