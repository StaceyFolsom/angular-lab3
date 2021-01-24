import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface RedditPost {
  title: string;
  image: string;
  link: string;
};

@Injectable({
  providedIn: 'root',
})
export class RedditApiService {
  posts: RedditPost[] = [];

  constructor(private http: HttpClient) {}

  getPosts() {
    const url = 'https://www.reddit.com/r/aww/.json';
    this.http.get(url).subscribe(
      (response: any) => {
        const posts = response.data.children;

        for (let post of posts) {
          const redditPost : RedditPost = {
            title: post.data.title,
            link: "https://reddit.com" + post.data.permalink,
            image: post.data.thumbnail
          };  
          this.posts.push(redditPost);  
        }
       
        console.log(this.posts);
        
      },

      (error) => {
        console.log(error);
      }
    );
  }
}
