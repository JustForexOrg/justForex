import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiGuidesComponent } from './api-guides.component';

describe('ApiGuidesComponent', () => {
  let component: ApiGuidesComponent;
  let fixture: ComponentFixture<ApiGuidesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiGuidesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiGuidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
