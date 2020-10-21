import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.page.html',
  styleUrls: ['./leaderboard.page.scss'],
})
export class LeaderboardPage implements OnInit {

  authService: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {
    
   }

  ngOnInit() {
  }
  logout() {
    this.authService.doLogout()
      .then(res => {
        this.router.navigate(["/login"]);
      }, err => {
        console.log(err);
      })
  }
}
