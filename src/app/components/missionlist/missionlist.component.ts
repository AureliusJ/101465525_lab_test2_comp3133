// src/app/components/missionlist/missionlist.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { Mission } from '../../models/mission.model';
import { MissionService } from '../../services/mission.service';
import { MissionfilterComponent } from '../missionfilter/missionfilter.component';

@Component({
  selector: 'app-missionlist',
  standalone: true,
  imports: [CommonModule, RouterModule, MissionfilterComponent, HttpClientModule],
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {
  missions: Mission[] = [];
  loading: boolean = true;
  errorMessage: string = '';

  constructor(
    private spacexService: MissionService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadMissions();
  }

  loadMissions(): void {
    this.loading = true;
    this.spacexService.getAllMissions().subscribe({
      next: (data: Mission[]) => {
      this.missions = data;
      this.loading = false;
      },
      error: (error: any) => {
      this.errorMessage = 'Error loading missions. Please try again later.';
      this.loading = false;
      console.error('Error fetching missions:', error);
      }
    });
  }

  applyFilters(filters: any): void {
    this.loading = true;
    this.spacexService.getFilteredMissions(filters).subscribe({
      next: (data: Mission[]) => {
      this.missions = data;
      this.loading = false;
      },
      error: (error: any) => {
      this.errorMessage = 'Error applying filters. Please try again later.';
      this.loading = false;
      console.error('Error fetching filtered missions:', error);
      }
    });
  }

  // Method to navigate to mission details page
  navigateToMissionDetails(flightNumber: number): void {
    this.router.navigate(['/mission', flightNumber]);
  }
}