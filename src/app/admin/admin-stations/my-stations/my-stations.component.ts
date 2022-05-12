import { Component, OnInit } from '@angular/core';
import { StationyService } from 'src/app/services/station.service';

@Component({
  selector: 'app-my-stations',
  templateUrl: './my-stations.component.html',
  styleUrls: ['./my-stations.component.css']
})
export class MyStationsComponent implements OnInit {

  constructor(private stationService: StationyService) { }

  ngOnInit(): void {
    this.stationService.getAllStations().subscribe((resp) => {
      console.log(resp);
    })
  }

}



