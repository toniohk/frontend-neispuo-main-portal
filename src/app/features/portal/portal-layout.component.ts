import { Component, OnInit, ViewChild } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-portal-layout',
  templateUrl: './portal-layout.component.html',
  styleUrls: ['./portal-layout.component.scss']
})
export class PortalLayoutComponent implements OnInit {
  constructor(public media: MediaObserver) {}
  @ViewChild('sidenav') sidenav: MatSidenav;

  ngOnInit(): void {}

  closeSidenav() {
    if (!this.media.isActive('gt-sm')) {
      this.sidenav.close();
    }
  }
}
