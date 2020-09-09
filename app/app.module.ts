import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { Base64 } from "@ionic-native/base64";

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { EducationPage } from '../pages/education/education';
import { SkillPage } from '../pages/skill/skill';
import { IntrestPage } from '../pages/intrest/intrest';
import { AwardsPage } from '../pages/awards/awards';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera, CameraOptions } from '@ionic-native/camera';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    EducationPage,
    SkillPage,
    IntrestPage,
    AwardsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    EducationPage,
    SkillPage,
    IntrestPage,
    AwardsPage  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},Base64,Camera,
  ]
})
export class AppModule {}
