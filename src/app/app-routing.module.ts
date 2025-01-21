import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmptyContainerComponent } from './ui/container/empty-container/empty-container.component';
import { MainContainerComponent } from './ui/container/main-container/main-container.component';
import { ProjectsComponent } from './ui/pages/projects/projects.component'; // Importe o componente aqui
import { ProjectsEnComponent } from './ui/pages/projects-en/projects-en.component';

const routes: Routes = [
  {
    path: '',
    component: MainContainerComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./ui/pages/home-pt/home.module').then((m) => m.HomeModule),
      }
    ]
  },
  {
    path: 'pt-br',
    component: MainContainerComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./ui/pages/home-pt/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'trabalhos',
        component: ProjectsComponent,
      }
    ]
  },
  {
    path: 'en',
    component: MainContainerComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./ui/pages/home-en/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'projects',
        component: ProjectsEnComponent,
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
