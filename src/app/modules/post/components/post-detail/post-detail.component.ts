import { Component, OnInit } from '@angular/core';
import {IPost} from "../../interface/post.interface";
import {ActivatedRoute} from "@angular/router";
import {PostService} from "../../services/post.service";

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute, private postService:PostService) { }
post:IPost;
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id})=>{
      this.postService.getById(id).subscribe(value => this.post = value)
    })
  }

}
