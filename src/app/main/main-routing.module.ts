import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { BookingComponent } from './booking/booking.component';
import { LayoutComponent } from './layout/layout.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { BookingGuard } from 'src/app/core/guards/booking.guard';
import { AdminGuard } from '../core/guards/admin.guard';
import { SignupGuard } from '../core/guards/signup.guard';

const routes: Routes = [
  {
    path: 'booking/:bookingId',
    component: BookingComponent,
    canActivate: [BookingGuard],
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'movie/:maPhim', component: MovieDetailComponent },
      { path: 'log-in', component: LogInComponent },
      {
        path: 'sign-up',
        component: SignUpComponent,
        canDeactivate: [SignupGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
