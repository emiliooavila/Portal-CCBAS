import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoTabs } from './info-tabs';

describe('InfoTabs', () => {
  let component: InfoTabs;
  let fixture: ComponentFixture<InfoTabs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoTabs],
    }).compileComponents();

    fixture = TestBed.createComponent(InfoTabs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
