import { Component } from '@angular/core'
import { trigger, state, style, animate, transition } from '@angular/animations'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

@Component({
  selector: 'side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: [
    './side-bar.component.css',
    '../../../../node_modules/font-awesome/css/font-awesome.min.css'
  ],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d(-100%, 0, 0)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),

    trigger('bodyMove', [
      state('in', style({
        transform: 'translate3d(370%, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d(0%, 0, 0)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ])
  ]
})

export class SideBarComponent {
  menuState:string = 'out';

  toggleMenu() {
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
  }
}
