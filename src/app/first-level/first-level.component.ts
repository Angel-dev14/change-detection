import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, Input, NgZone } from '@angular/core';
import { ChildData } from '../child-data.type';
import { SecondLevelComponent } from '../second-level/second-level.component';

@Component({
  selector: 'app-first-level',
  imports: [CommonModule, SecondLevelComponent],
  template: `
    <strong>{{ childData.label }}</strong>
    <span>{{visualizeChangeDetectionRan()}}</span>

    <div class="children">
    <app-second-level
      *ngFor="let data of childData.children; trackBy: track"
      [childData]="data"
    ></app-second-level>
    </div>

  `,
  standalone: true,
  styleUrls: ['./first-level.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FirstLevelComponent {
  @Input() public childData: ChildData;

  track = (i: any) => i;

  constructor(
    private elementRef: ElementRef,
    private zone: NgZone,
    ) {}

  public visualizeChangeDetectionRan(): void {
    this.zone.runOutsideAngular(() => {
      this.elementRef.nativeElement.classList.add('detecting');
      setTimeout(() => {
        this.elementRef.nativeElement.classList.remove('detecting');
      }, 1000);
    });
  }

}
