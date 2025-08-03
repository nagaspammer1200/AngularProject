import { Routes } from '@angular/router';
import { QuestionPapersComponent } from './question-papers/question-papers.component';
import { ProjectsWorkComponent } from './projects-work/projects-work.component';
import { LabQuestionsComponent } from './lab-questions/lab-questions.component';

export const routes: Routes = [
  { path: '', redirectTo: 'question-papers', pathMatch: 'full' },
  { path: 'question-papers', component: QuestionPapersComponent },
  { path: 'projects-work', component: ProjectsWorkComponent },
  { path: 'lab-questions', component: LabQuestionsComponent },
];
