import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearTransaccionComponent } from './crear-transaccion.component';

describe('CrearTransaccionComponent', () => {
  let component: CrearTransaccionComponent;
  let fixture: ComponentFixture<CrearTransaccionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearTransaccionComponent]
    });
    fixture = TestBed.createComponent(CrearTransaccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
