import { Component, Input, OnInit } from '@angular/core';
import { RedditApiService } from "../reddit-api.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers: [ RedditApiService]
})
export class PostComponent implements OnInit {
  @Input() post: any;

  constructor(public redditAPI: RedditApiService) {}

  ngOnInit() {
    this.redditAPI.getPosts();
  }

}
