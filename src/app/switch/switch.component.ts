import { Component } from '@angular/core';
import { ThemeService } from './theme.service';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent {
  constructor(private themeService: ThemeService) {
  }

  /**
   * TODO: Dark theme is yet to be set
   */
  public setTheme(): void {

  }
}
