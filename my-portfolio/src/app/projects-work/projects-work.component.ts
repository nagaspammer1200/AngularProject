import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects-work',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section>
      <h2 class="text-2xl font-bold mb-4">Project Work</h2>
      <p class="mb-2">This is where you can list your project reports, source code references, summaries, etc.</p>
      <div class="border p-4 rounded-md mb-3">
        <h3 class="font-semibold">Portfolio Website</h3>
        <p class="text-sm text-gray-600">Built with Angular and a planned .NET/PostgreSQL backend.</p>
      </div>
    </section>
  `,
})
export class ProjectsWorkComponent {}
