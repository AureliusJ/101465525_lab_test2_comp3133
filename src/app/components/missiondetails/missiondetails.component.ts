import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Mission } from '../../models/mission.model';
import { MissionService } from '../../services/mission.service';

@Component({
  selector: 'app-missiondetails',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css']
})
export class MissiondetailsComponent implements OnInit {
  mission: Mission | null = null;
  loading: boolean = true;
  errorMessage: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private spacexService: MissionService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const flightNumber = Number(params.get('flightNumber'));
      if (flightNumber) {
        this.loadMissionDetails(flightNumber);
      } else {
        this.router.navigate(['/missions']);
      }
    });
  }

  loadMissionDetails(flightNumber: number): void {
    this.loading = true;
    this.spacexService.getMissionByFlightNumber(flightNumber).subscribe({
      next: (data: any) => {
        this.mission = data;
        this.loading = false;
      },
      error: (error: any) => {
        this.errorMessage = `Error loading mission details for flight ${flightNumber}.`;
        this.loading = false;
        console.error('Error fetching mission details:', error);
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/missions']);
  }
}