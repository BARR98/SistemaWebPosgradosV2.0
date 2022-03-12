import { Component, OnInit } from '@angular/core';
import { MaestriasService } from 'src/app/core/services/maestrias/maestrias.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-general-planes-estudio',
  templateUrl: './general-planes-estudio.component.html',
  styleUrls: ['./general-planes-estudio.component.css']
})
export class GeneralPlanesEstudioComponent implements OnInit {

  _id: string
  master: any
  gpes_objetivo_general: string
  gpes_objetivos_especificos: []
  gpes_star: string
  gpes_metas: []
  gpes_mision: string
  gpes_vision: string
  gpesab_datos: any
  gpesao_datos: any
  gsdt_datos: any

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
          console.log(getedMaster)
          this.gpes_objetivo_general = this.master['general']['GPlanesEstudio']['GPES_objetivo_general']
          this.gpes_objetivos_especificos = this.master['general']['GPlanesEstudio']['GPES_objetivos_especificos']
          this.gpes_star = this.master['general']['GPlanesEstudio']['GPES_metas']['GPES_star']
          this.gpes_metas = this.master['general']['GPlanesEstudio']['GPES_metas']['GPES_metas']
          this.gpes_mision = this.master['general']['GPlanesEstudio']['GPES_metas']['GPES_mision']
          this.gpes_vision = this.master['general']['GPlanesEstudio']['GPES_metas']['GPES_vision']
          this.gpesab_datos = this.master['general']['GPlanesEstudio']['GPES_asignaturas_basicas']['GPESAB_datos']
          this.gpesao_datos = this.master['general']['GPlanesEstudio']['GPES_asignaturas_optativas']['GPESAO_datos']
          this.gsdt_datos = this.master['general']['GPlanesEstudio']['GPES_seminario_tesis']
        });
    });
 
  }

}
