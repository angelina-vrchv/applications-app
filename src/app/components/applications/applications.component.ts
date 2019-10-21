import { Component, OnInit } from '@angular/core';
import { ApplicationService } from '../../services/application.service'
import { Application } from '../../models/Application'

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css']
})

export class ApplicationsComponent implements OnInit {
  applications:Application[];
  showAdd:boolean = false;
  showEdit:boolean = false;
  application:Application;

  constructor(private applicationService:ApplicationService) { }

  ngOnInit() {
  }

  loadApplications(){
    this.applicationService.getApplications().subscribe(applications => {
      this.applications = applications;
    });
  }

  hideApplications(){
    this.applications = null
  }

  deleteApplication(applicationId:String){
    //delete applications from UI
    this.applications = this.applications.filter((app)=> app._id !== applicationId);
    this.applicationService.deleteApplication(applicationId).subscribe();
  }

  displayAddForm(){
    this.showAdd = !this.showAdd
  }

  displayEditForm(){
    this.showEdit = !this.showEdit
  }

  addApplication(application:Application){
    this.loadApplications()
    this.applicationService.addApplication(application).subscribe(application => {
      this.applications.push(application);
    })
    this.displayAddForm()
  }  

  editApplication(application:Application){
    this.displayEditForm()
    this.application = application;

  }
  editedApplication(application:Application){
    const index = this.applications.findIndex((app)=>app._id === application._id);
    this.applications[index] = application;
    this.applicationService.updateApplication(application).subscribe();
    this.displayEditForm()
  }
}
