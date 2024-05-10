import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyThingsModalPage } from './my-things-modal.page';

describe('MyThingsModalPage', () => {
  let component: MyThingsModalPage;
  let fixture: ComponentFixture<MyThingsModalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MyThingsModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
