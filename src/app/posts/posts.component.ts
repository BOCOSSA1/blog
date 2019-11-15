import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

 @Input() postTitle: String;
 @Input() postContent: String;
 @Input() loveIts: number;
 @Input() postDate: Date;

  constructor() { }

  ngOnInit() {
    this.loveIts = 0;
  }
  OnloveIt(){
    this.loveIts = this.loveIts + 1;
  }
  OnDontloveIt(){
    this.loveIts = this.loveIts - 1;
  }
}
