import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructualDirectivesComponent } from './structual-directives.component';

describe('StructualDirectivesComponent', () => {
  let component: StructualDirectivesComponent;
  let fixture: ComponentFixture<StructualDirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StructualDirectivesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StructualDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
