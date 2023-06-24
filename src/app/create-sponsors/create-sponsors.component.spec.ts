import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSponsorsComponent } from './create-sponsors.component';

describe('CreateSponsorsComponent', () => {
  let component: CreateSponsorsComponent;
  let fixture: ComponentFixture<CreateSponsorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateSponsorsComponent]
    });
    fixture = TestBed.createComponent(CreateSponsorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
