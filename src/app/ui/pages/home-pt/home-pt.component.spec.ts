import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePtComponent } from './home-pt.component';

describe('HomePtComponent', () => {
  let component: HomePtComponent;
  let fixture: ComponentFixture<HomePtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
