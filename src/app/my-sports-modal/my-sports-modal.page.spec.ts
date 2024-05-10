import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MySportsModalPage } from './my-sports-modal.page';

describe('MySportsModalPage', () => {
  let component: MySportsModalPage;
  let fixture: ComponentFixture<MySportsModalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MySportsModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
