import { Component } from '@angular/core';

@Component({
  selector: 'app-tabel',
  templateUrl: './tabel.component.html',
  styleUrls: ['./tabel.component.scss']
})
export class TabelComponent {
  tableHeading = ['Name', 'Age', 'City'];

  students = [
    { name: 'tushar', age: 20, city: "pune" },
    { name: 'Pooja', age: 23, city: "pune" },
    { name: "om", age: 22, city: "pune" },
    { name: 'tushar', age: 20, city: "pune" },
    { name: 'Pooja', age: 23, city: "pune" },
    { name: "om", age: 22, city: "pune" },
    { name: 'tushar', age: 20, city: "pune" },
    { name: 'Pooja', age: 23, city: "pune" },
    { name: "om", age: 22, city: "pune" }
  ];

  searchedValue:any;
  amount:any;

}
