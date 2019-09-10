import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { SignupPage } from '../signup/signup';

/**
 * LÁ EM BAIXO SE CRIA A FUNÇÃO PRO BOTÕES ;
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }
//CHAMANDO O LOGIN E CADASTRO ;
// PRECISA IMPORTAR ÁS PÁGINAS LoginPage, SignuPage ;
//FUNÇÕES PROS BOTÕES ;
  login(){
    this.navCtrl.push(LoginPage);
  }

  signup(){
    this.navCtrl.push(SignupPage, {}, {animate:false});

  }
}
