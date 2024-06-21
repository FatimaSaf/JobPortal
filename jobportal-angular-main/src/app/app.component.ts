import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  constructor(private http:HttpClient) {


  }
  ngOnInIt(){
    this.http.get('https://humber-demo-ce013-default-rtdb.firebaseio.com/Job%20Posting.json').subscribe(
      data=> console.log(data)
    )
  }
}
