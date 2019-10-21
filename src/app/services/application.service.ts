import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Application } from '../models/Application';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
} 

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
  applicationsUrl:string = 'https://assignment-applications-app.herokuapp.com/applications';

  constructor(private http:HttpClient) { }

  getApplications():Observable<Application[]>{
    //get applications from server
    return this.http.get<Application[]>(`${this.applicationsUrl}`);
  }

  deleteApplication(applicationId):Observable<Application> {
    //Remove from server
    const url = `${this.applicationsUrl}/${applicationId}`;
    return this.http.delete<Application>(url, httpOptions);
  }

  updateApplication(application: Application):Observable<any> {
    const url = `${this.applicationsUrl}/${application._id}`;
    return this.http.patch(url, application, httpOptions);
  }

  addApplication(application:Application):Observable<Application>{
    //add application to the server
    const url = `${this.applicationsUrl}`;
    return this.http.post<Application>(url, application, httpOptions);
  }
}
