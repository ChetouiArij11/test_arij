import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/post.model';
@Injectable({
  providedIn: 'root'
})
export class PostService {
posts=[
{id:'45ml',title:'azer',contenu:'voila votre premier ligne '},
{id:'5897',title:'ooma',contenu:'voila votre 2eme ligne '},
{id:'879jjh',title:'gml',contenu:'voila votre 3eme ligne '},
{id:'123',title:'lbs',contenu:'voila votre 4eme ligne '},
];


constructor(private http: HttpClient) {
  this.chargerListPost().subscribe((posts) => {
    console.log(posts);
  });}
  chargerListPost() : Observable<Post[]>{
    return this.http.get<Post[]>('http://localhost:3000/PostAPI');
  }
}
