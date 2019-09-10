import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ProviderUrlProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProviderUrlProvider {
  url: string = "";

  constructor(public http: HttpClient) { }

  getUrl(){
    return this.url;
  }

}
