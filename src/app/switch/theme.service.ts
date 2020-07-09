import { Injectable } from '@angular/core';
import { Theme, light, dark } from './theme.model';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private active: Theme = light;

  /**
   * To set a theme first we need to set value in local storage as 'darkThemeEnabled' to either
   * 'true' or 'false'
   */
  public setDarkTheme(): void {
    const darkThemeEnabled = localStorage.getItem('darkThemeEnabled') || false;
    console.log(darkThemeEnabled);
    if (darkThemeEnabled) {
        this.setTheme(dark);
    } else {
        this.setTheme(light);
    }
  }

  private setTheme(theme: Theme): void {
    this.active = theme;

    Object.keys(this.active.properties).forEach(property => {
      document.documentElement.style.setProperty(
        property,
        this.active.properties[property]
      );
    });
  }
}
