import { ChangeDetectionStrategy, Component, ElementRef, NgZone } from '@angular/core';
import { ChildData } from './child-data.type';
import { updateNodeTree } from './helpers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {

  public data: ChildData[] = [
    {
      label: 'Level 1: 1',
      id: 'l1_1',
      children: [
        {
          label: 'Level 2: 1',
          id: 'l2_1',
          children: [
            {
              label: 'Level 3: 1',
              id: 'l3_1',
            },
            {
              label: 'Level 3: 2',
              id: 'l3_2',
            },
          ],
        },
        {
          label: 'Level 2: 2',
          id: 'l2_2',
          children: [
            {
              label: 'Level 3: 3',
              id: 'l3_3',
            },
            {
              label: 'Level 3: 4',
              id: 'l3_4',
            },
          ],
        },
      ],
    },
    {
      id: 'l1_2',
      label: 'Level 1: 2',
      children: [
        {
          id: 'l2_3',
          label: 'Level 2: 3',
          children: [
            {
              label: 'Level 3: 5',
              id: 'l3_5',
            },
          ],
        },
      ],
    },
  ];

  track = (i: any) => i;

  constructor(private elementRef: ElementRef, private zone: NgZone) {
  }

  public visualizeChangeDetectionRan() {
    this.elementRef.nativeElement.classList.add('detecting');
    this.zone.runOutsideAngular(() => {
      setTimeout(() => {
        this.elementRef.nativeElement.classList.remove('detecting');
      }, 1000);
    });
  }

  public update(id: string) {
    this.data = updateNodeTree(this.data, id);
  }

}
