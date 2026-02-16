import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-leader-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './leader-info.component.html',
  styleUrls: ['./leader-info.component.css']
})
export class LeaderInfoComponent {
  @Input() name: string = '';
  @Input() age: number = 0;
  @Input() location: string = '';
  @Input() team: string = '';
  @Input() badge: string = '';
  @Input() motto: string = '';
  
  @Output() monologueClick = new EventEmitter<string>();
  
  showDetails: boolean = false;
  
  toggleDetails() {
    this.showDetails = !this.showDetails;
  }
  
  onMonologueClick() {
    this.monologueClick.emit(this.name);
    alert(`${this.name}: "${this.motto}"`);
  }
}