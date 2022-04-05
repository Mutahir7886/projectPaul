import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
@Injectable({
  providedIn: "root"
})
export class homeService {

  testData = environment.apiBaseUrl + 'test';

  constructor(private http: HttpClient, ) {}

  
  public getTableData(): Observable<any> {
    return this.http.get(this.testData);
  }

  
  
}
