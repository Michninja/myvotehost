import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, ActivatedRoute } from "@angular/router";
import { FirebaseService } from '../services/firebase.service';

@Injectable()
export class DetailsResolver implements Resolve<any> {

  
  constructor(private firebaseService: FirebaseService) {}

  resolve() {
    return this.firebaseService.getTasks();
  }
}