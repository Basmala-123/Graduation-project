import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummerizeModalComponent } from './summerize-modal.component';

describe('SummerizeModalComponent', () => {
  let component: SummerizeModalComponent;
  let fixture: ComponentFixture<SummerizeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummerizeModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SummerizeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
