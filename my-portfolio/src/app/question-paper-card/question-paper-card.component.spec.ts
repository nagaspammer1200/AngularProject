import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionPaperCardComponent } from './question-paper-card.component';

describe('QuestionPaperCardComponent', () => {
  let component: QuestionPaperCardComponent;
  let fixture: ComponentFixture<QuestionPaperCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestionPaperCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionPaperCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
