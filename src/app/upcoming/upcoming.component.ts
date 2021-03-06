import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {SpacexService} from "../spacex.service";

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.css']
})
export class UpcomingComponent implements OnInit {

  collection = {};

  constructor(private spacex: SpacexService, private router: Router) {
  }

  ngOnInit(): void {
    this.spacex.getData('launches/upcoming').subscribe((result) => {
      this.collection = result;
    });
  }

  getBackgroundUrl(index: number) {
    return "url(\'assets/file/backgrounds/upcoming-" + index + ".webp\')"
  }

  getDate(unix: number) {
    return new Date(unix).toLocaleDateString("en-US")
  }

  getTime(unix: number) {
    return new Date(unix).toLocaleTimeString("en-US")
  }

  navigate(id: number) {
    this.router.navigate(['/launches/' + id]).then(r => {});
  }

}
