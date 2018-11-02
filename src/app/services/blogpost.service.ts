import { Injectable } from '@angular/core';
import { Post } from '../modals/blogpost.modal';
import { AngularFirestore , AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';;
@Injectable({
  providedIn: 'root'
})
export class BlogpostService {
  posts: Post[]=[]
  postcollection:AngularFirestoreCollection
  constructor(private db:AngularFirestore) {
    this.postcollection=this.db.collection('blogposts',ref=>ref.orderBy('timestamp','desc'))
    this.getPosts().subscribe(data=>this.posts=data)
    
   }
   getPost(id:string){
     return this.posts.find(tmp=>tmp.id==id)         
   }

   getPosts(){
    return this.postcollection.snapshotChanges().pipe(map(changes=>{
      return changes.map(a=>{
        const data = a.payload.doc.data() as Post;
        data.id=a.payload.doc.id;
        return data;
      });
    }));
   }
}
