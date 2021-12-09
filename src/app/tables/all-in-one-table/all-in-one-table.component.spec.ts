import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllInOneTableComponent } from './all-in-one-table.component';

describe('AllInOneTableComponent', () => {
  let component: AllInOneTableComponent;
  let fixture: ComponentFixture<AllInOneTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllInOneTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllInOneTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
