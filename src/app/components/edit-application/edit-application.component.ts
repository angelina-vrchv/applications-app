import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { Application } from 'src/app/models/Application';

@Component({
  selector: "app-edit-application",
  templateUrl: "./edit-application.component.html",
  styleUrls: ["./edit-application.component.css"]
})
export class EditApplicationComponent implements OnInit {

  @Output() editedApplication: EventEmitter<any> = new EventEmitter();
  @Input() application: Application;
  
  _id:string;
  name: string;
  email: string;
  age: number;
  phone_number: string;
  way_of_communication: boolean;
  english_level: number;
  available_to_start: string;
  technical_skills?: string;
  personal_presentation?: string;
  study_from_home?: boolean;
  constructor() {}

  ngOnInit() {
    this._id = this.application._id
    this.name = this.application.name
    this.email = this.application.email
    this.age = this.application.age
    this.phone_number = this.application.phone_number
    this.way_of_communication = this.application.way_of_communication
    this.english_level= this.application.english_level
    this.available_to_start = this.application.available_to_start
    this.technical_skills = this.application.technical_skills
    this.personal_presentation = this.application.personal_presentation
    this.study_from_home = this.application.study_from_home
  }

  onSubmit(){
    const application = {
      _id: this._id,
      name: this.name,
      email: this.email,
      age: this.age,
      phone_number: this.phone_number,
      way_of_communication: this.way_of_communication,
      english_level: this.english_level,
      available_to_start: this.available_to_start,
      technical_skills: this.technical_skills,
      personal_presentation: this.personal_presentation,
      study_from_home: this.study_from_home
    }
    this.editedApplication.emit(application);
  }
}
