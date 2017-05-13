import { Injectable } from '@angular/core';
import { Hike } from './hike.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class HikeService {
  hikes: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.hikes = database.list('hikes');
  }

  getHikes() {
    return this.hikes;
  }

  getHikeById(hikeId: string) {
    return this.database.object('hikes/' + hikeId);
  }

  addHike(newHike: Hike) {
    this.hikes.push(newHike);
  }

}
