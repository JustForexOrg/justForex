import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestorGuideComponent } from './investor-guide.component';

describe('InvestorGuideComponent', () => {
  let component: InvestorGuideComponent;
  let fixture: ComponentFixture<InvestorGuideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestorGuideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestorGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
