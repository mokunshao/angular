import { Component, OnInit } from '@angular/core';
import { Post } from './models/post.model';
import { PostService } from './services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  title = '123';
  entities: Post[];

  constructor(
    private postService: PostService
  ) {
    this.entities = this.postService.index();
  }

  ngOnInit() {
  }

  removeItem(item: Post) {
    this.entities = this.entities.filter(entity => entity.id !== item.id);
  }
}
