import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { LoadingController, ToastController, AlertController } from '@ionic/angular';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  
  // products: Product[];
  products;

  searchTerm: string = '';
  // filteredItems: Product[] = [];
  filteredItems = [];
  authService: any;
  
  

  constructor(
    public loadingCtrl: LoadingController,
    private router: Router,
    private route: ActivatedRoute,
    public modalController: ModalController,
    public toastController: ToastController
  ) { }

  ngOnInit() {
    if (this.route && this.route.data) {
      this.getData();
    }
  }

  async getData() {
    const loading = await this.loadingCtrl.create({
      message: 'Please wait...'
    });
    this.presentLoading(loading);

    this.route.data.subscribe(routeData => {
      routeData['data'].subscribe(data => {
        loading.dismiss();
        this.products = data;
      })
    })
  }

  async presentLoading(loading) {
    return await loading.present();
  }
  
  logout() {
    this.authService.doLogout()
      .then(res => {
        this.router.navigate(["/login"]);
      }, err => {
        console.log(err);
      })
  }
  setFilteredItems() {
    this.filteredItems = [];
    console.log("Buscando: ", this.searchTerm);

    let include;

    this.products.map(product => {
      include = product.payload.doc.data().title.includes(this.searchTerm);
      if (include == true) {
        console.log('include!!!!', product.payload.doc.data().title);
        this.filteredItems.push(product);
      }
    }
    );

    console.log('filtered votes', this.filteredItems);
  }
  
  
async presentToast() {
  const toast = await this.toastController.create({
    message: 'Your vote has have been recorded.',
    duration: 2000,
    position: 'top',
  });
  toast.present();
}

async presentToastWithOptions() {
  const toast = await this.toastController.create({
    header: 'Toast header',
    message: 'Click to Close',
    position: 'top',
    color: 'success',
    buttons: [
      {
        side: 'start',
        icon: 'star',
        text: 'Favorite',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Done',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }
    ]
  });
  toast.present();
}

}
