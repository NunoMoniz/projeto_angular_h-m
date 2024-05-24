import { Component } from '@angular/core';
import { TopmenuComponent } from '../topmenu/topmenu.component';
import { MenuiconsComponent } from '../../menuicons/menuicons.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TopmenuComponent, MenuiconsComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
