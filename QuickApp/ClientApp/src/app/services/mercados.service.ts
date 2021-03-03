import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MercadosService {

  constructor(private http: HttpClient) { }

  public indices() {
    this.http.get("https://app0.soymkm.com/market-indices")
  }
}
