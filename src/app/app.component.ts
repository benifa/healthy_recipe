import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  loadedFeature = 'shopping-list';

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }

  ngOnInit() {
    const  config = {
    apiKey: "AIzaSyBX4wl7NTKlH8qKoThgtICRRcm4p8irO0U",
    authDomain: "recipe-book-372d3.firebaseapp.com",
    databaseURL: "https://recipe-book-372d3.firebaseio.com",
    storageBucket: "recipe-book-372d3.appspot.com"
  };
  firebase.initializeApp(config);
  }
}
