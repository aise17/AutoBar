import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OcamareroPage } from './ocamarero.page';

describe('OcamareroPage', () => {
  let component: OcamareroPage;
  let fixture: ComponentFixture<OcamareroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OcamareroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OcamareroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
