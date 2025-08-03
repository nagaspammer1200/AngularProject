import { Component, Input } from '@angular/core';

export interface QuestionPaper {
  id: string;
  title: string;
  subject: string;
  exam_date: string;           // original date, e.g., "2023-03-15"
  series: 'Series 1' | 'Series 2';
  googleDriveUrl: string;      // the shareable link
}


@Component({
  selector: 'app-question-paper-card',
  standalone: true,
  templateUrl: './question-paper-card.component.html',
})
export class QuestionPaperCardComponent {
  @Input() paper!: QuestionPaper;
}
