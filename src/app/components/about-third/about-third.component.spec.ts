import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutThirdComponent } from './about-third.component';

describe('AboutThirdComponent', () => {
  let component: AboutThirdComponent;
  let fixture: ComponentFixture<AboutThirdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutThirdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutThirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
