import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, ActionSheetController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Base64 } from "@ionic-native/base64";


import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { EducationPage } from '../pages/education/education';
import { SkillPage } from '../pages/skill/skill';
import { IntrestPage } from '../pages/intrest/intrest';
import { AwardsPage } from '../pages/awards/awards';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  userData: any = {name:' NITA DAKE',design:'Front End Developer',cno:"+91-9763485225"};
  uploadImage: any;
  pages: Array<{ title: string; component: any }>;
  rootPage: any = HomePage;
  notiCount = 0;
  iconArray: any = [];
  path: any = "assets/imgs/person.png";

  //pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private base64: Base64,
    public camera: Camera, public actionsheetCtrl: ActionSheetController,) {
      this.iconArray = [
        "person",
        "briefcase",
        "clipboard",
        "bulb",
        "heart",
        "trophy",
        
      ];
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'About', component: HomePage },
      { title: 'Experience', component: ListPage },
      { title: 'Education', component: EducationPage },
      { title: 'Skills', component: SkillPage },
      { title: 'Intrests', component: IntrestPage },
      { title: 'Awards', component: AwardsPage },
      
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
  level1Pages() //Admin Pages
  {
    
    this.pages = [
      { title: "Home", component: "HomePage" },
      { title: "list", component: "ListPage" },
      
      // { title: "Leads", component: "LeadcategoryPage" },
      // { title: "Tasks", component: "QuickactionPage" },
      // { title: "Report", component: "ReportadminPage" },
      // { title: "FAQ", component: "TabsPage" },
      // { title: "Feedback", component: "Feedback1Page" },
      // // {title: 'Support', component: 'SupportPage'},
      // { title: "Logout", component: "LogoutPage" }
    ];
  }
  takePhoto(sourceType: number) {
    const options: CameraOptions = {
      quality: 70,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      sourceType: sourceType
    };

    this.camera.getPicture(options).then(
      imageData => {
        let base64Image = "data:image/jpeg;base64," + imageData;
        //this.path=imageData;
        this.path = imageData;
        this.path = base64Image;
        console.log("new base 64 Path :" + this.path);
        console.log("image path:" + imageData);
        //let filePath: string = 'file:///...';
        let filePath: string = imageData;
        console.log("file path :" + filePath);
        this.base64.encodeFile(filePath).then(
          (base64File: string) => {
            console.log("base64 data:" + base64File);
            this.uploadImage = this.path;
            console.log("second 64 base path: " + this.path);
            console.log(this.uploadImage);
            this.uploadProfilePicture();
          },
          err => {
            console.log(err);
          }
        );
      },
      err => {
        // Handle error
      }
    );
  }
  openImageOptions() {
    let actionSheet = this.actionsheetCtrl.create({
      title: "Select Profile Picture",
      cssClass: "action-sheets-basic-page",
      buttons: [
        {
          //style="background:black;color:white;font-size:20px;text-alignment:center"
          text: "Take Photo",
          //role: 'destructive',
          icon: !this.platform.is("ios") ? "md-camera" : null,
          handler: () => {
            this.takePhoto(1);
            console.log("Take Photo Clicked");
          }
        },
        {
          text: "Select From Gallary ",
          icon: !this.platform.is("ios") ? "md-image" : null,
          handler: () => {
            console.log("Select From Gallary Clicked");
            this.takePhoto(0);
          }
        },
        {
          text: "Cancel",
          role: "cancel", // will always sort to be on the bottom
          icon: !this.platform.is("ios-close") ? "md-close-circle" : null,
          handler: () => {
            console.log("Cancel clicked");
          }
        }
      ]
    });
    actionSheet.present();
  }
  uploadProfilePicture() {
    console.log("uploadProfilePicture() executed");
    console.log(this.uploadImage);
    if (
      (this.uploadImage != null && this.path != "assets/imgs/person.png") ||
      (this.uploadImage != undefined && this.path != "assets/imgs/person.png")
    ) {
      //this.fdata={cno:'9604479760',image:this.uploadImage,type:'image/jpeg'};
      // this.fdata = {
      //   userid: this.logdata.userid,
      //   image: this.uploadImage,
      //   type: "image/jpeg"
      // };
      //this.fdata={email:this.logdata.email,cno:this.logdata.cno,image:this.uploadImage,type:'image/jpeg'};
      // if(this.logdata.type=="Research Team"){
      // this.serviceProvider.uploadLevel1Profile(this.fdata).then(
      //   result => {
      //     console.log(result);
      //     this.responseData = result;
      //     //console.log("responsedata:"+JSON.stringify(this.responseData));
      //     if (this.responseData.type == "success") {
      //       // this.path=
      //       this.presentToast("Image Updated Successfully");
      //     } else {
      //       this.presentToast("Image Updatation Failed");
      //     }
      //   },
    //     error => {
    //       console.log(error);
    //       this.presentToast("error in image updation");
    //     }
    //   );
    // } else {
    //   this.presentToast("No Image Present");
    // }
  }

  }
}
