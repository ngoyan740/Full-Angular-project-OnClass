import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsachGheDaDatComponent } from './dsach-ghe-da-dat.component';

describe('DsachGheDaDatComponent', () => {
  let component: DsachGheDaDatComponent;
  let fixture: ComponentFixture<DsachGheDaDatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DsachGheDaDatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DsachGheDaDatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
