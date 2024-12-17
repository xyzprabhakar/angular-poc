import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplCommonLibComponent } from './compl-common-lib.component';

describe('ComplCommonLibComponent', () => {
  let component: ComplCommonLibComponent;
  let fixture: ComponentFixture<ComplCommonLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComplCommonLibComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComplCommonLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
