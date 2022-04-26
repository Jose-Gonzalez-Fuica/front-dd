import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HojaPersonajeComponent } from './hoja-personaje.component';

describe('HojaPersonajeComponent', () => {
  let component: HojaPersonajeComponent;
  let fixture: ComponentFixture<HojaPersonajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HojaPersonajeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HojaPersonajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
