import { Component, OnInit } from '@angular/core';
import { MercadosIndices } from '../../models/mercados-indices';
import { MercadosService } from '../../services/mercados.service';

@Component({
  selector: 'app-mercados',
  templateUrl: './mercados.component.html',
  styleUrls: ['./mercados.component.scss']
})
export class MercadosComponent implements OnInit {

  constructor(private service: MercadosService) { }

  public isCollapsed = false;
  INDICES_DATA: MercadosIndices[];


  ngOnInit(): void {
  }

}
