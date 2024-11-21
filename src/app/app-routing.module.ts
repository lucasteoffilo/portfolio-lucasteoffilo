import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmptyContainerComponent } from './ui/container/empty-container/empty-container.component';
import { MainContainerComponent } from './ui/container/main-container/main-container.component';

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
      }
    ]

  },

  // {
  //   path: 'pt-br/trabalhos',
  //   component: MainContainerComponent,
  //   children: [
  //     {
  //       path: '',
  //       loadChildren: () =>
  //         import('./ui/pages/showcases-pt/showcases.module').then((m) => m.HomeModule),
  //     }
  //   ]

  // },

  {
    path: 'en',
    component: MainContainerComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./ui/pages/home-en/home.module').then((m) => m.HomeModule),
      }
    ]

  },

  // {
  //   path: 'en/showcases',
  //   component: MainContainerComponent,
  //   children: [
  //     {
  //       path: '',
  //       loadChildren: () =>
  //         import('./ui/pages/home-en/home.module').then((m) => m.HomeModule),
  //     }
  //   ]

  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
