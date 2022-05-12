import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-filter',
  templateUrl: './admin-filter.component.html',
  styleUrls: ['./admin-filter.component.css']
})
export class AdminFilterComponent implements OnInit {
  list = [{ "id": 1, "stationName": "Opera", "lift": "True", "escalator": "False", "callterminal": "True" },
    { "id": 2, "stationName": "Mairie des Lilas", "lift": "False", "escalator": "True", "callterminal": "False" },
    { "id": 3, "stationName": "Belle-ville", "lift": "True", "escalator": "False", "callterminal": "True" }]

  constructor() { }

  ngOnInit(): void {
  }

}
