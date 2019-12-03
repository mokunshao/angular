import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  title = '123';
  entities = [{ title: 'hello', body: '123456789' }, { title: 'hola', body: '54321' }, { title: '你好' }];
  constructor() { }

  ngOnInit() {
  }

  removeItem(i: number) {
    this.entities = this.entities.filter((item, index) => index !== i);
  }
}
