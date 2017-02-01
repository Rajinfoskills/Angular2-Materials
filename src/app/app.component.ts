import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  galleryScreen: Array<any>;

  constructor(private _http: Http) {
    this._http.get('./data.json')
      .map(response => response.json().screens)
      .subscribe(res => this.galleryScreen = res);
  }

  likeMe(i) {
    this.galleryScreen[i].liked = this.galleryScreen[i].liked == 0 ? 1 : 0;
  }

  deleteMe(i) {
    this.galleryScreen.splice(i, 1);
    console.log("image" + i + " is deleted");
  }
  

}
