import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MissionService } from '../../services/mission.service';
import { Mission } from '../../models/mission.model';

@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css']
})
export class MissiondetailsComponent implements OnInit {
  mission?: Mission;

  constructor(
    private route: ActivatedRoute,
    private missionService: MissionService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.missionService.getMissionById(+id).subscribe(data => this.mission = data);
    }
  }
}
