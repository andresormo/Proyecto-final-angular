import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOfertComponent } from './edit-ofert.component';

describe('EditOfertComponent', () => {
  let component: EditOfertComponent;
  let fixture: ComponentFixture<EditOfertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditOfertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditOfertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
