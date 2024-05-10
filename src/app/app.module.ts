// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageModule } from './home/home.module';
import { RestaurantsPageModule } from './restaurants/restaurants.module';
import { SportsPageModule } from './sports/sports.module';
import { HistoryPageModule } from './history/history.module';
import { ThingstodoPageModule } from './thingstodo/thingstodo.module';
import { MyModalPageModule } from './my-modal/my-modal.module';
import { MySportsModalPageModule } from './my-sports-modal/my-sports-modal.module';
import { MyHistoryModalPageModule } from './my-history-modal/my-history-modal.module';
import { MyThingsModalPageModule } from './my-things-modal/my-things-modal.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HomePageModule,
    RestaurantsPageModule,
    SportsPageModule,
    HistoryPageModule,
    ThingstodoPageModule,
    MyModalPageModule,
    MySportsModalPageModule,
    MyHistoryModalPageModule,
    MyThingsModalPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}

