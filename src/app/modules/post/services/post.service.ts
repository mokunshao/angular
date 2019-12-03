import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { posts } from '../posts';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  entites: Post[];

  constructor() {
    this.entites = posts;
  }

  index() {
    return this.entites;
  }

  show(id: number) {
    return this.entites.find(post => post.id === id);
  }
}
