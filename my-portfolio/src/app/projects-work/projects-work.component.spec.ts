import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsWorkComponent } from './projects-work.component';

describe('ProjectsWorkComponent', () => {
  let component: ProjectsWorkComponent;
  let fixture: ComponentFixture<ProjectsWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsWorkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectsWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
