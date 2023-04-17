import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertListComponent } from './ofert-list.component';

describe('OfertListComponent', () => {
  let component: OfertListComponent;
  let fixture: ComponentFixture<OfertListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfertListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfertListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
