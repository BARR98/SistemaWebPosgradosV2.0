import { Component, OnInit } from '@angular/core';
import { MaestriasService } from 'src/app/core/services/maestrias/maestrias.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
@Component({
  selector: 'app-general-perfiles',
  templateUrl: './general-perfiles.component.html',
  styleUrls: ['./general-perfiles.component.css']
})
export class GeneralPerfilesComponent implements OnInit {

  panelOpenState = true;
  _id: string
  master: any
  nombre_maestria: string 
  abreviatura_maestria: string
  gpi_start: string
  gpi_conocimientos_basicos: []
  gpi_conocimientos_habilidades: []
  gpi_conocimientos_aptitudes_valores: []
  gpe_start:[]
  gpe_capacidades: []
  gpe_competencias: []
  gpe_conocimientos: []
  gpe_habilidades: []
  gpe_aptitudes: []


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
          this.nombre_maestria = this.master['nombre_maestria'],
          this.abreviatura_maestria = this.master['abreviatura_maestria']
          this.gpi_start = this.master['general']['GPerfil_ingreso']['GPI_start']
          this.gpi_conocimientos_basicos = this.master['general']['GPerfil_ingreso']['GPI_conocimientos_basicos']
          this.gpi_conocimientos_habilidades= this.master['general']['GPerfil_ingreso']['GPI_conocimientos_habilidades']
          this.gpi_conocimientos_aptitudes_valores = this.master['general']['GPerfil_ingreso']['GPI_conocimientos_aptitudes_valores']
          this.gpe_start = this.master['general']['GPerfil_egreso']['GPE_start']
          this.gpe_capacidades = this.master['general']['GPerfil_egreso']['GPE_capacidades']
          this.gpe_competencias = this.master['general']['GPerfil_egreso']['GPE_competencias']
          this.gpe_conocimientos = this.master['general']['GPerfil_egreso']['GPE_conocimientos']
          this.gpe_habilidades = this.master['general']['GPerfil_egreso']['GPE_habiliades']
          this.gpe_aptitudes = this.master['general']['GPerfil_egreso']['GPE_aptitudes']
          console.log(getedMaster)


        });
    });
  }

}
