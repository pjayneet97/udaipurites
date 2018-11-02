import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../modals/blogpost.modal';

@Component({
  selector: 'app-postcard',
  templateUrl: './postcard.component.html',
  styleUrls: ['./postcard.component.css']
})
export class PostcardComponent implements OnInit {
  @Input() post:Post
  constructor() { }

  ngOnInit() {
  }

}
