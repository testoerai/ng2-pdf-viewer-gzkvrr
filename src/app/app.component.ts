import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {}
  src: any;

  ngOnInit() {
    this.src = this.test();
    console.log("test");
  }

  test() {
    console.log("test");
    return this.http.get(
      `https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf`,
      { responseType: 'arraybuffer' as 'json' }
    );
  }
}
