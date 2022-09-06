import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaconsultasComponent } from './listaconsultas.component';

describe('ListaconsultasComponent', () => {
  let component: ListaconsultasComponent;
  let fixture: ComponentFixture<ListaconsultasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaconsultasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaconsultasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
