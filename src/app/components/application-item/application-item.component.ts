import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Application } from 'src/app/models/Application';

@Component({
  selector: 'app-application-item',
  templateUrl: './application-item.component.html',
  styleUrls: ['./application-item.component.css']
})
export class ApplicationItemComponent implements OnInit {

  @Input() application: Application;
  @Output() deleteApplication: EventEmitter<Application> = new EventEmitter();
  @Output() editApplication: EventEmitter<Application> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onDelete(applicationId){
    this.deleteApplication.emit(applicationId);
  }

  onEdit(application){
    this.editApplication.emit(application);
  }

}
