import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalLayoutComponent } from './portal-layout.component';
import { SharedModule } from '@shared/shared.module';
import { PortalRoutingModule } from './portal-routing.module';
import { DashboardPage } from './pages/dashboard/dashboard.page';
import { UserMenuComponent } from './components/user-menu/user-menu.component';
import { DashboardMenuComponent } from './components/dashboard-menu/dashboard-menu.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { InstitutionsPage } from './pages/institutions/institutions.page';
import { StudentsPage } from './pages/students/students.page';
import { SchoolBooksPage } from './pages/school-books/school-books.page';

@NgModule({
  declarations: [PortalLayoutComponent, DashboardPage, UserMenuComponent, DashboardMenuComponent, BreadcrumbComponent, InstitutionsPage, StudentsPage, SchoolBooksPage],
  imports: [CommonModule, SharedModule, PortalRoutingModule]
})
export class PortalModule {}
