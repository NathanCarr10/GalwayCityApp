import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ThingstodoPage } from './thingstodo.page';

describe('ThingstodoPage', () => {
  let component: ThingstodoPage;
  let fixture: ComponentFixture<ThingstodoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ThingstodoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
