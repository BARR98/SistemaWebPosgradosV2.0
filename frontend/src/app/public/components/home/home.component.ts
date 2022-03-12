import { Component, OnInit } from '@angular/core';
import { MaestriasService } from 'src/app/core/services/maestrias/maestrias.service';
import { ActivatedRoute,Router,Params } from '@angular/router';
import { Maestria } from 'src/app/core/models/maestria/maestria';
import { UrlWithStringQuery } from 'url';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  _id: string
  master: any
  nombre_maestria: string
  objetivo_general: string
  tramites: string
  procesos: string

  constructor(
    public maestriasService: MaestriasService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this._id = this.activatedRoute.snapshot.paramMap.get('id')
      console.log(this._id)
      this.maestriasService.getMaestria(this._id)
      .subscribe(getedMaster => {
        this.master = getedMaster
        console.log(this.master)
        this.nombre_maestria = this.master['nombre_maestria']
        this.objetivo_general = this.master['general']['GObjetivoGeneral']
        this.tramites = this.master['general']['GTramites']
        this.procesos = this.master['general']['GFechas']
      });
    });
    
  }

}
