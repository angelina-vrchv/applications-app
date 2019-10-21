import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-add-application",
  templateUrl: "./add-application.component.html",
  styleUrls: ["./add-application.component.css"]
})
export class AddApplicationComponent implements OnInit {
  @Output() addApplication: EventEmitter<any> = new EventEmitter();

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

  ngOnInit() {}

  clearForm(){
    this.name = '';
    this.email = '';
    this.age = null;
    this.phone_number = '';
    this.way_of_communication = null;
    this.english_level = null;
    this.available_to_start = '';
    this.technical_skills = '';
    this.personal_presentation = '';
    this.study_from_home = null;
  }

  onSubmit(){
    const application = {
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
    this.addApplication.emit(application)
    this.clearForm();
  }
}
