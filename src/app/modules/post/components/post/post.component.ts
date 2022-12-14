import {Component, Input, OnInit} from '@angular/core';
import {IPost} from "../../interface/post.interface";
import {ActivatedRoute, Router} from "@angular/router";
import {urls} from "../../../../configs";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input()
  post: IPost;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

  getDetails(): void {
    this.router.navigate([this.post.id], {relativeTo: this.activatedRoute})
  }
}
