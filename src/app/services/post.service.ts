import { BadInput } from './bad-input';
import { NotFoundError } from './nof-found-error';
import { AppError } from './../posts/app-error';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http : Http) { }

  getPosts() {
    return this.http.get(this.url);
  }

  createPost(post) {
    return this.http.post(this.url, JSON.stringify(post))
    .pipe( catchError((error : Response) => {
        if( error.status === 400 ) 
          return Observable.throw(new BadInput(error.json()));

        else 
          return Observable.throw(new AppError(error.json()));
      })
    );
  }

  updatePost(post) {
    return this.http.patch(this.url + '/' + post.id, JSON.stringify({ isRead: true }));
  }

  deletePost(id) {
    return this.http.delete(this.url + '/' + id)
    .pipe( catchError((error: Response) => {
      if( error.status === 404  )
        return Observable.throw(new NotFoundError());  
        
      return Observable.throw(
        new AppError(error));
    })
    );
  }
}
  