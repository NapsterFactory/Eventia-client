import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSponsorsComponent } from './delete-sponsors.component';

describe('DeleteSponsorsComponent', () => {
  let component: DeleteSponsorsComponent;
  let fixture: ComponentFixture<DeleteSponsorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteSponsorsComponent]
    });
    fixture = TestBed.createComponent(DeleteSponsorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
