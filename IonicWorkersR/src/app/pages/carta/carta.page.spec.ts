import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CartaPage } from './carta.page';

describe('CartaPage', () => {
  let component: CartaPage;
  let fixture: ComponentFixture<CartaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CartaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
