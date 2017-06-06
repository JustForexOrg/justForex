import { TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Location, CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { SideBarComponent } from './side-bar.component';

describe('SideBarComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SideBarComponent
      ],
      imports: [ RouterTestingModule ]
    }).compileComponents();
  }));

  it('should create the sidebar', async(() => {
    const fixture = TestBed.createComponent(SideBarComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  // it('should render dashboard in li:nth-child(5) tag', async(() => {
  //   const fixture = TestBed.createComponent(SideBarComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('li:nth-child(2)').textContent).toContain('Dashboard');
  // }));

  // it('dashboard button should redirect to /dashboard', async(() => {
  //   const fixture = TestBed.createComponent(SideBarComponent);
  //   fixture.detectChanges();
  //   let href = fixture.debugElement.query(By.css('li:nth-child(2)')).nativeElement
  //       .getAttribute('routerLink');
  //   expect(href).toEqual('/dashboard');
  // }));

});
