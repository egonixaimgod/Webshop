import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcPartShowcaseComponent } from './pc-part-showcase.component';

describe('PcPartShowcaseComponent', () => {
  let component: PcPartShowcaseComponent;
  let fixture: ComponentFixture<PcPartShowcaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PcPartShowcaseComponent]
    });
    fixture = TestBed.createComponent(PcPartShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
