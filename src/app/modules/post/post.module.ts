import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from './components/post/post.component';
import { PostsComponent } from './components/posts/posts.component';
import {PostService} from "./services/post.service";
import { PostDetailComponent } from './components/post-detail/post-detail.component';


@NgModule({
  declarations: [
    PostComponent,
    PostsComponent,
    PostDetailComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule
  ],
  providers:[PostService]
})
export class PostModule { }
