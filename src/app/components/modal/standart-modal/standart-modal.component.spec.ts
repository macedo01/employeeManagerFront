import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandartModalComponent } from './standart-modal.component';

describe('StandartModalComponent', () => {
  let component: StandartModalComponent;
  let fixture: ComponentFixture<StandartModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StandartModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StandartModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
