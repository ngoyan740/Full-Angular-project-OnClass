import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsachGheComponent } from './dsach-ghe.component';

describe('DsachGheComponent', () => {
  let component: DsachGheComponent;
  let fixture: ComponentFixture<DsachGheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DsachGheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DsachGheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
