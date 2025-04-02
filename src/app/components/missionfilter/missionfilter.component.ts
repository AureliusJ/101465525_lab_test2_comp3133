import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-missionfilter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './missionfilter.component.html',
  styleUrls: ['./missionfilter.component.css']
})
export class MissionfilterComponent implements OnInit {
  @Output() filtersChanged = new EventEmitter<any>();
  
  selectedYear: string = '';
  launchSuccess: boolean | null = null;
  landSuccess: boolean | null = null;

  constructor() { }

  ngOnInit(): void {
  }

  onYearChange(): void {
    this.emitFilters();
  }

  resetFilters(): void {
    this.selectedYear = '';
    this.launchSuccess = null;
    this.landSuccess = null;
    this.emitFilters();
  }

  emitFilters(): void {
    this.filtersChanged.emit({
      year: this.selectedYear,
      launch: this.launchSuccess,
      land: this.landSuccess
    });
  }
}