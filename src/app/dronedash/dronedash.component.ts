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

  polledDroneData: Observable<Array<droneData>>;

  constructor(private dashService : DashreportService) { }

  clearData(){
    console.log('Test Me');
    this.dashService.cleanRecords();
  }

  ngOnInit() {
    let droneAPI;
    console.log(' I am polling');
    droneAPI = this.dashService.callDashboardService();
    this.polledDroneData = timer(0,500000).pipe(
      concatMap(_ => droneAPI),
      map((response: Array<droneData>) => {
        /*console.log(response,'reponse from the json data file');*/
        return response;}
      ),
    );
    this.polledDroneData.subscribe((res)=>{
      this.displayBarcodeData=Array.from(this.prepDisplayData(res.reverse()));
      console.log(this.displayBarcodeData.length,'i am called')
    });
  }
  prepDisplayData(apiRes : any){
    let displayMap = new Map();
    apiRes.forEach(elem => {
      if(displayMap.has(elem.ID)){
        displayMap.get(elem.ID).push(elem.Data.barcodeData);
      } else{
        displayMap.set(elem.ID, [elem.Data.barcodeData]);
      }
    });
    return displayMap;
  }
}
