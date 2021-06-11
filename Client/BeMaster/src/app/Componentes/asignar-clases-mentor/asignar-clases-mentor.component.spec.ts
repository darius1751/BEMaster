import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarClasesMentorComponent } from './asignar-clases-mentor.component';

describe('AsignarClasesMentorComponent', () => {
  let component: AsignarClasesMentorComponent;
  let fixture: ComponentFixture<AsignarClasesMentorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignarClasesMentorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignarClasesMentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
