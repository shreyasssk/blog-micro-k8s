import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('f') signupForm: NgForm;
  loadedPosts = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit(postData: { title: string }) {
    this.http.post('http://posts.com/posts/create', postData)
      .subscribe(responseData => {
        console.log(responseData);
      });
    this.signupForm.reset();
  }
}
