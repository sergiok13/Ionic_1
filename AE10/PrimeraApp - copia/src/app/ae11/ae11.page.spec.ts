import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Ae11Page } from './ae11.page';

describe('Ae11Page', () => {
  let component: Ae11Page;
  let fixture: ComponentFixture<Ae11Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ae11Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Ae11Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
