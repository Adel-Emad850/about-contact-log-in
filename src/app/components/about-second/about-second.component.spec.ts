import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSecondComponent } from './about-second.component';

describe('AboutSecondComponent', () => {
  let component: AboutSecondComponent;
  let fixture: ComponentFixture<AboutSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutSecondComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
