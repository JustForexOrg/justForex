import { TestBed, async } from '@angular/core/testing';

import { SideBarComponent } from '../../fixed/side-bar/side-bar.component';

describe('SideBarComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SideBarComponent
      ],
    }).compileComponents();
  }));

  it('should create the side-bar', async(() => {
    const fixture = TestBed.createComponent(SideBarComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  // it('should render title in a h1 tag', async(() => {
  //   const fixture = TestBed.createComponent(SideBarComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to dashboard');
  // }));
});
