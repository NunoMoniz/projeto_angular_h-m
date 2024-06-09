import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {

  @Output() filterChanged: EventEmitter<number> = new EventEmitter();
  
}
