import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
tableData=[
  {
    sn:'1',
    firstName:'milan',
    lastName:'parajuli',
    address:'kapan'
  },
  {
    sn:'2',
    firstName:'arjun',
    lastName:'Bhusal',
    address:''
  }
]
  constructor() { }

  ngOnInit(): void {
  }

}
