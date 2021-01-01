import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  @ViewChild('f') signupForm: NgForm;

  loadedComments = [];
  @Input() postId: any;
  @Input() postComment: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    console.log(this.postComment);
  }

  onSubmit(commentData: { content: string}) {
    this.http.post<{ content: string }>(`http://posts.com/posts/${this.postId}/comments`, commentData)
      .subscribe(responseData => {
        console.log(responseData);
      });
  }


}
