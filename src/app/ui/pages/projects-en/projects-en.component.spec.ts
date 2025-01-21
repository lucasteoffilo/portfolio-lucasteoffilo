import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsEnComponent } from './projects-en.component';

describe('ProjectsEnComponent', () => {
  let component: ProjectsEnComponent;
  let fixture: ComponentFixture<ProjectsEnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectsEnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectsEnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
