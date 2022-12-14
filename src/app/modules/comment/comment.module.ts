import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentRoutingModule } from './comment-routing.module';
import { CommentComponent } from './components/comment/comment.component';
import { CommentsComponent } from './components/comments/comments.component';
import {CommentService} from "./services/comment.service";


@NgModule({
  declarations: [
    CommentComponent,
    CommentsComponent
  ],
  imports: [
    CommonModule,
    CommentRoutingModule
  ],
  providers:[CommentService]
})
export class CommentModule { }
