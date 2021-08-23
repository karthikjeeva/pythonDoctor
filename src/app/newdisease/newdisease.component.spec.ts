import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewdiseaseComponent } from './newdisease.component';

describe('NewdiseaseComponent', () => {
  let component: NewdiseaseComponent;
  let fixture: ComponentFixture<NewdiseaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewdiseaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewdiseaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
