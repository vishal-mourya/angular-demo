import { BadInput } from './../services/bad-input';
import { NotFoundError } from './../services/nof-found-error';
import { AppError } from './app-error';
import { PostService } from '../services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[];
  
  constructor(private service : PostService) {
    
  }

  err = error => {
    alert('An Unexpected error occured!');
    console.log(error);
  };

  ngOnInit() {
    this.service.getPosts()
    .subscribe( response => {
      // console.log(response.json());
      this.posts = response.json();
    }, 
    error => {
      alert('An unexpected error occurred!');
      console.log(error);
    });
  } 

  createPost(input : HTMLInputElement) {
    let post = {
      title : input.value
    };
    input.value = '';
    this.service.createPost(post)
    .subscribe(response => {
      post['id'] = response.json().id;
      this.posts.splice(0, 0, post);
      // console.log(response.json());
    },(error:AppError) => {
      if( error instanceof(BadInput) ) {
        
        // this.form.setErrors(error.originalError);
      }
      else {
        alert('Unexpected error');
        console.log(error);
      }
    });
  }

  updatePost( post ) {
     this.service.updatePost(post)
     .subscribe( response => {
       console.log(response.json());
     }, this.err);
  }

  deletePost(post) {
    this.service.deletePost(100000)
    .subscribe( response => {
      let index = this.posts.indexOf(post);
      this.posts.splice(index,1);
    },
    (error : AppError) => {
      if(error instanceof NotFoundError) 
        alert('This Post is already deleted!');
      else {
        alert('An Unexpected error occured');
        console.log(error);
      } 
    });
  }
}
