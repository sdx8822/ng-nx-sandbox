import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RescuesSheltersComponent } from './rescues-shelters.component';

describe('RescuesSheltersComponent', () => {
  let component: RescuesSheltersComponent;
  let fixture: ComponentFixture<RescuesSheltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RescuesSheltersComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RescuesSheltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
