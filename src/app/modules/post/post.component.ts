import { Component, OnInit } from '@angular/core';
import { Post } from './models/post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  title = '123';
  entities = [{ id: 1, title: 'hello', body: '123456789' }, { id: 2, title: 'hola', body: '54321' }, { id: 3, title: '你好' }];
  constructor() { }

  ngOnInit() {
  }

  removeItem(item: Post) {
    this.entities = this.entities.filter(entity => entity.id !== item.id);
  }
}
