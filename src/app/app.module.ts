import { NgtUniversalModule } from '@ng-toolkit/universal';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './posts/post/post.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PostcardComponent } from './posts/postcard/postcard.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: PostsComponent },
  { path: 'post/:id', component: PostComponent },

  { path: '**', component: PostsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostComponent,
    NavbarComponent,
    PostcardComponent,
    FooterComponent,
    CarouselComponent
  ],
  imports:[
    CommonModule,
    NgtUniversalModule,
    RouterModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
 
    
  ],
  providers: [],
})
export class AppModule { }
