// app-routing.module.ts
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePageModule } from './home/home.module'; // Import HomePageModule
import { RestaurantsPageModule } from './restaurants/restaurants.module'; // Import RestaurantsPageModule
import { IonicModule } from '@ionic/angular';
import { SportsPageModule } from './sports/sports.module';
import { HistoryPageModule } from './history/history.module';
import { ThingstodoPageModule } from './thingstodo/thingstodo.module';
import { MyModalPageModule } from './my-modal/my-modal.module';
import { MySportsModalPageModule } from './my-sports-modal/my-sports-modal.module';
import { MyHistoryModalPageModule } from './my-history-modal/my-history-modal.module';
import { MyThingsModalPageModule } from './my-things-modal/my-things-modal.module';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },

  {
    path: 'restaurants',
    loadChildren: () => import('./restaurants/restaurants.module').then( m => m.RestaurantsPageModule)
  },
  {
    path: 'sports',
    loadChildren: () => import('./sports/sports.module').then( m => m.SportsPageModule)
  },
  {
    path: 'history',
    loadChildren: () => import('./history/history.module').then( m => m.HistoryPageModule)
  },
  {
    path: 'thingstodo',
    loadChildren: () => import('./thingstodo/thingstodo.module').then( m => m.ThingstodoPageModule)
  },
  {
    path: 'my-modal',
    loadChildren: () => import('./my-modal/my-modal.module').then( m => m.MyModalPageModule)
  },
  {
    path: 'my-sports-modal',
    loadChildren: () => import('./my-sports-modal/my-sports-modal.module').then( m => m.MySportsModalPageModule)
  },
  {
    path: 'my-history-modal',
    loadChildren: () => import('./my-history-modal/my-history-modal.module').then( m => m.MyHistoryModalPageModule)
  },
  {
    path: 'my-things-modal',
    loadChildren: () => import('./my-things-modal/my-things-modal.module').then( m => m.MyThingsModalPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    HomePageModule, // Add HomePageModule to imports
    RestaurantsPageModule, // Add RestaurantsPageModule to imports
    SportsPageModule,
    HistoryPageModule,
    ThingstodoPageModule,
    MyModalPageModule,
    MySportsModalPageModule,
    MyHistoryModalPageModule,
    MyThingsModalPageModule,
    IonicModule.forRoot(),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
