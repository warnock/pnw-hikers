import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';
import { Hike } from '../hike.model';
import { HikeService } from '../hike.service';

@Component({
  selector: 'app-hike-list',
  templateUrl: './hike-list.component.html',
  styleUrls: ['./hike-list.component.css'],
  providers: [HikeService]
})
export class HikeListComponent implements OnInit {
  hikes: FirebaseListObservable<any[]>;


  constructor(private router: Router, private hikeService: HikeService) { }

  ngOnInit() {
    this.hikes = this.hikeService.getHikes();
  }

  goToDetailPage(clickedHike) {
    this.router.navigate(['hikes', clickedHike.$key]);
  }

}
