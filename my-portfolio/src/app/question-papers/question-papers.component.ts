import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionPaperCardComponent, QuestionPaper } from '../question-paper-card/question-paper-card.component';

@Component({
  selector: 'app-question-papers',
  standalone: true,
  imports: [CommonModule, QuestionPaperCardComponent],
  template: `
    <section>
      <h2 class="text-2xl font-bold mb-4">Question Papers</h2>
      <div class="grid gap-4">
        <app-question-paper-card
          *ngFor="let p of papers"
          [paper]="p"
        ></app-question-paper-card>
      </div>
    </section>
  `,
})
export class QuestionPapersComponent {
  papers: QuestionPaper[] = [
    { id: '1', title: 'Calculus I - Midterm', subject: 'Calculus I', exam_date: "March 2023", series:"Series 1",googleDriveUrl: '#' },
    { id: '2', title: 'Data Structures - Final', subject: 'CS101', exam_date: "December 2024", series:"Series 2", googleDriveUrl: '#' },
    // add more mock entries as needed
  ];
}
