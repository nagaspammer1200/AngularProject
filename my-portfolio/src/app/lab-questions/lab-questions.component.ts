import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lab-questions',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section>
      <h2 class="text-2xl font-bold mb-4">Lab Questions</h2>
      <p class="mb-2">Collection of lab exercises and their solutions.</p>
      <ul class="list-disc pl-5">
        <li>Lab 1: Introduction to Circuits</li>
        <li>Lab 2: Digital Logic</li>
      </ul>
    </section>
  `,
})
export class LabQuestionsComponent {}
