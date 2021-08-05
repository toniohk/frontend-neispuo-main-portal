import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortalLayoutComponent } from './portal-layout.component';
import { DashboardPage } from './pages/dashboard/dashboard.page';
import { InstitutionsPage } from './pages/institutions/institutions.page';
import { StudentsPage } from './pages/students/students.page';
import { SchoolBooksPage } from './pages/school-books/school-books.page';

const routes: Routes = [
  {
    path: '',
    component: PortalLayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard'
      },
      {
        path: 'dashboard',
        component: DashboardPage,
        data: {
          breadcrumb: 'Всички'
        }
      },
      {
        path: 'institutions',
        component: InstitutionsPage,
        data: {
          breadcrumb: 'Институции'
        }
      },
      {
        path: 'students',
        component: StudentsPage,
        data: {
          breadcrumb: 'Деца и ученици'
        }
      },
      {
        path: 'school-books',
        component: SchoolBooksPage,
        data: {
          breadcrumb: 'Дневници'
        }
      },
      {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'dashboard'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalRoutingModule {}
