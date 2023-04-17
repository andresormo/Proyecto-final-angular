import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnOfertsComponent } from './own-oferts.component';

describe('OwnOfertsComponent', () => {
  let component: OwnOfertsComponent;
  let fixture: ComponentFixture<OwnOfertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnOfertsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OwnOfertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
