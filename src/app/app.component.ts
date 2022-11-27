import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {}
  pdfSource = 'https://www.orimi.com/pdf-test.pdf';
  src: any;

  ngOnInit() {
    this.src = this._base64ToArrayBuffer(this.pdfSource);
  }

  test() {
    this.src = this.http.get(`assets/test.pdf`, {
      responseType: 'arraybuffer' as 'json',
    });
  }

  autreTest() {
    this.src = 'https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf';
  }

  dernierTest() {
    this.src = this._base64ToArrayBuffer(this.pdfSource);
  }

  _base64ToArrayBuffer(base64) {
    const binary_string = window.atob(bas64);
    const len = binary_string.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
      bytes[i] = binary_string.charCodeAt(i);
    }
    return bytes.buffer;
  }
}
