import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuard } from './core/guards/admin.guard';
// import { AdminModule } from './admin/admin.module';
// import {DemoComponent} from './demo/demo.component';
// import {Baitap2Component} from './baitap2/baitap2.component';
// import {DatVeXeComponent} from './dat-ve-xe/dat-ve-xe.component';
// import {DatVeXeModule} from './dat-ve-xe/dat-ve-xe.module';
// import{MainModule} from './main/main.module';

const routes: Routes = [
  // {path: "", component: DemoComponent},
  // {path:"baitap2", component: Baitap2Component},
  // // {path: "datvexe", component: DatVeXeComponent}
  // {path:"datvexe", loadChildren: () => DatVeXeModule},

  // {path:"admin", loadChildren: () => AdminModule},

  {path:"admin", loadChildren:() => //Kỹ thuật lazy load
    import('./admin/admin.module').then((m) => m.AdminModule),
    canActivate:[AdminGuard]
},

  {path:"", loadChildren:() =>
  import('./main/main.module').then((m) => m.MainModule)},


  //Khi gắn module vào router thì không cần phải gắn vào mảng imports của module đó nữa
  // {path:"", loadChildren: () => MainModule},
  //pathMatch : 'full' : như exact trong React

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
