import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


import { TabsPagePage } from './tabs-page.page';



describe('TabsPagePage', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TabsPagePage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  it('should create the tabs page', () => {
    const fixture = TestBed.createComponent(TabsPagePage);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});

