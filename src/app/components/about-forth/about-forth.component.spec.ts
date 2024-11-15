import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutForthComponent } from './about-forth.component';

describe('AboutForthComponent', () => {
  let component: AboutForthComponent;
  let fixture: ComponentFixture<AboutForthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutForthComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutForthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
