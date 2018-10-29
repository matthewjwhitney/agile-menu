/* Copyright 2017 Alt-Solutions, LLC. All rights reserved. */
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { WelcomePage } from '../pages/welcome/welcome';
import { BeerPage } from '../pages/beer/beer';
import { OtherbeveragesPage } from '../pages/otherbeverages/otherbeverages';
import { SmallplatesPage } from '../pages/smallplates/smallplates';
import { SandwichesPage } from '../pages/sandwiches/sandwiches';
import { LargeplatesPage } from '../pages/largeplates/largeplates';
import { SidesPage } from '../pages/sides/sides';
import { DessertPage } from '../pages/dessert/dessert';
import { SuppliersPage } from '../pages/suppliers/suppliers';
import { OrderPage } from '../pages/order/order';
import { AboutPage } from '../pages/about/about';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = WelcomePage;
  
  public unregisterBackButtonAction: any;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public menuCtrl: MenuController) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'WELCOME', component: WelcomePage },
	//  { title: 'BEER', component: BeerPage },
	//  { title: 'OTHER BEVERAGES', component: OtherbeveragesPage },
	  { title: 'SMALL PLATES', component: SmallplatesPage },
	  { title: 'SANDWICHES', component: SandwichesPage },
	  { title: 'LARGE PLATES', component: LargeplatesPage },
	  { title: 'SIDES', component: SidesPage },
	  { title: 'DESSERTS', component: DessertPage },
	  { title: 'OUR PRODUCERS', component: SuppliersPage },
	  { title: 'MY ORDER', component: OrderPage },
	  { title: 'ABOUT US', component: AboutPage }
    ];

  }
  
    public initializeBackButtonCustomHandler(): void {
        this.unregisterBackButtonAction = this.platform.registerBackButtonAction(() => {
            this.customHandleBackButton();
        }, 10);
    }
	
	private customHandleBackButton(): void {
        // do what you need to do here
		this.menuCtrl.toggle();
    }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
	  this.initializeBackButtonCustomHandler();

    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
