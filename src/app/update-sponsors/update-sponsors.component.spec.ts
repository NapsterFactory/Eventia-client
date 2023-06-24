import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSponsorsComponent } from './update-sponsors.component';

describe('UpdateSponsorsComponent', () => {
  let component: UpdateSponsorsComponent;
  let fixture: ComponentFixture<UpdateSponsorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateSponsorsComponent]
    });
    fixture = TestBed.createComponent(UpdateSponsorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
