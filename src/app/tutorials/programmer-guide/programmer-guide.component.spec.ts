import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammerGuideComponent } from './programmer-guide.component';

describe('ProgrammerGuideComponent', () => {
  let component: ProgrammerGuideComponent;
  let fixture: ComponentFixture<ProgrammerGuideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgrammerGuideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgrammerGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
