import { Component, OnInit } from '@angular/core';
import { DashreportService } from '../../services/dashreport.service';
import {droneData} from '../../interfaces/droneData';

// RXJS related functionality
import { timer } from 'rxjs';
import { concatMap, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dronedash',
  templateUrl: './dronedash.component.html',
  styleUrls: ['./dronedash.component.css']
})
export class DronedashComponent implements OnInit {
  displayBarcodeData;
  polledDroneData: Observable<droneData>;

  constructor(private dashService : DashreportService) { }

  ngOnInit() {
    let droneAPI;
    console.log(' I am polling');
    droneAPI = this.dashService.callDashboardService();
    this.polledDroneData = timer(0,5000).pipe(
      concatMap(_ => droneAPI),
      map((response: droneData) => {
        /*console.log(response,'reponse from the json data file');*/
        return response;}
      ),
    );
    this.polledDroneData.subscribe((res)=>{
      this.displayBarcodeData=res;
      console.log(this.displayBarcodeData.length,'i am called')
    });
  }
}
