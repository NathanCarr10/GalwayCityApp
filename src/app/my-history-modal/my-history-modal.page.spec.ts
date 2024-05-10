import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyHistoryModalPage } from './my-history-modal.page';

describe('MyHistoryModalPage', () => {
  let component: MyHistoryModalPage;
  let fixture: ComponentFixture<MyHistoryModalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MyHistoryModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
