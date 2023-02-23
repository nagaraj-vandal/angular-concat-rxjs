import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { concatMap } from 'rxjs/operators';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css'],
})
export class TestComponentComponent {
  constructor(private http: HttpClient) {}
  firstHit = [];
  secondHit: any = [];
  fetchData() {
    this.http
      .get('https://jsonplaceholder.typicode.com/todos/1')
      .pipe(
        concatMap((data: any) => {
          console.log(data, 'Hiiii data');
          this.firstHit = data;
          return this.processData(data);
        })
      )
      .subscribe((result) => {
        console.log(result);
        this.secondHit = result;
        return result;
      });
  }

  processData(data: any) {
    return this.http.post('https://jsonplaceholder.typicode.com/posts', data);
  }
}
