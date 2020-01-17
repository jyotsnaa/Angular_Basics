import { Component, Input, EventEmitter, Output } from '@angular/core';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  
}
