import { ChangeDetectionStrategy, Component, NgZone, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-some',
  template: `
    <h1>Hello {{ name }}</h1>
  `,
  styleUrl: './some.component.css',
  changeDetection: ChangeDetectionStrategy.Default
})
export class SomeComponent implements OnInit {

  name = 'Angular';

  constructor(
    private _viewContainerRef: ViewContainerRef,
    private _ngZone: NgZone,
  ) {

  }

  ngOnInit() {


  }


}
