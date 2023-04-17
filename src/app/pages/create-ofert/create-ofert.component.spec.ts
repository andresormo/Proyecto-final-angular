import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOfertComponent } from './create-ofert.component';

describe('CreateOfertComponent', () => {
  let component: CreateOfertComponent;
  let fixture: ComponentFixture<CreateOfertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateOfertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateOfertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
