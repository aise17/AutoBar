import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProductsoforderPage } from './productsoforder.page';

describe('ProductsoforderPage', () => {
  let component: ProductsoforderPage;
  let fixture: ComponentFixture<ProductsoforderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsoforderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductsoforderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
