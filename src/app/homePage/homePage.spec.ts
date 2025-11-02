import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomaPage } from './homePage';

describe('HomaPage', () => {
  let component: HomaPage;
  let fixture: ComponentFixture<HomaPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomaPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
