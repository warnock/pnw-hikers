import { Component, OnInit } from '@angular/core';
import { Hike } from '../hike.model';
import { Router } from '@angular/router';
import { HikeService } from '../hike.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import {MaterializeAction} from 'angular2-materialize';


@Component({
  selector: 'app-new-hike',
  templateUrl: './new-hike.component.html',
  styleUrls: ['./new-hike.component.css'],
  providers: [HikeService]
})
export class NewHikeComponent implements OnInit {
  hikeForm: FormGroup;
  categories: string[] = ["Easy", "Moderate", "Difficulty"];

  constructor(private router: Router, private hikeService: HikeService, private fb: FormBuilder) { }

  ngOnInit() {
    this.hikeForm = this.fb.group({
    hikeName: ['', Validators.required],
    author: ['', Validators.required],
    state: ['', Validators.required],
    coordinates: ['', Validators.required],
    type: ['', Validators.required],
    difficulty: ['', Validators.required],
    distance: ['', Validators.required],
    season: ['', Validators.required],
    image: ['', Validators.required],
    shortDescription: ['', Validators.required],
    description: ['', Validators.required],
    note: ['', Validators.required],
    recommendation: ['', Validators.required],
    familyFriendly: ['', Validators.required],
    dogFriendly: ['', Validators.required],
    parking: ['', Validators.required],
    email: ['', Validators.required],
  })
};

  addNewHike() {
    var {hikeName, author, state, coordinates, type, difficulty, distance, season, image, shortDescription, description, note, recommendation, familyFriendly, dogFriendly, parking, email} = this.hikeForm.value;
    var newHike = new Hike(hikeName, author, state, coordinates, type, difficulty, distance, season, image, shortDescription, description, note, recommendation, familyFriendly, dogFriendly, parking, email);
    this.hikeService.addHike(newHike);
    this.hikeForm.reset();
  }
}
