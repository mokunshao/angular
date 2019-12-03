import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../../models/post.model';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {
  entity: Post;

  constructor(
    private readonly route: ActivatedRoute,
    private postService: PostService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const postId = parseInt(params.get('id'), 10);
      this.entity = this.postService.show(postId);
    });
  }

}
