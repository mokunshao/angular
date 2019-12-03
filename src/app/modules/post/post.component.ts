import { Component, OnInit } from '@angular/core';
import { Post } from './models/post.model';
import { posts } from './posts';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  title = '123';
  entities: Post[];

  constructor() {
    this.entities = posts;
  }

  ngOnInit() {
  }

  removeItem(item: Post) {
    this.entities = this.entities.filter(entity => entity.id !== item.id);
  }
}
