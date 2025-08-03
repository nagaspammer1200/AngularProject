import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabQuestionsComponent } from './lab-questions.component';

describe('LabQuestionsComponent', () => {
  let component: LabQuestionsComponent;
  let fixture: ComponentFixture<LabQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LabQuestionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
