import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { droneData } from '../interfaces/droneData';
import { environment } from '../environments/environment';
import { HttpHeaders } from '@angular/common/http';

// RXJS related functionality
import { timer } from 'rxjs';
import { concatMap, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashreportService implements OnInit{  
  polledDroneData: Observable<Array<droneData>>;
  
  constructor(private httpClient: HttpClient) { }

  ngOnInit(){
    console.log('Service initialized');
  }
  
  callDashboardService(){
    let droneAPI = this.httpClient.get(environment.apiData.dashBoardAPI);
    return droneAPI;
  }

  cleanRecords(){
    this.httpClient.post(environment.apiData.clearRecords, {});
  }
}
