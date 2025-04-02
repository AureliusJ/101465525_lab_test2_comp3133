import { Component, OnInit } from '@angular/core';
import { MissionService } from '../../services/mission.service';
import { Mission } from '../../models/mission.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {
  missions: Mission[] = [];

  constructor(
    private missionService: MissionService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const year = params['year'];
      if (year) {
        this.missionService.getMissionsByYear(year).subscribe(data => this.missions = data);
      } else {
        this.missionService.getAllMissions().subscribe(data => this.missions = data);
      }
    });
  }
}
