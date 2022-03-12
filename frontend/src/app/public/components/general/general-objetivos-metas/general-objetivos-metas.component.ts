import { Component, OnInit } from '@angular/core';
import { MaestriasService } from 'src/app/core/services/maestrias/maestrias.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-general-objetivos-metas',
  templateUrl: './general-objetivos-metas.component.html',
  styleUrls: ['./general-objetivos-metas.component.css']
})
export class GeneralObjetivosMetasComponent implements OnInit {

  _id: string
  master: any
  gobjetivo_general: string
  gobjetivos_especificos: string 
  gmetas: string 
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
          this.gobjetivo_general = this.master['general']['GObjetivoGeneral']
          this.gobjetivos_especificos = this.master['general']['GObjetivosEspecificos']
          this.gmetas = this.master['general']['GMetas']
        });
    });
 
  }

}
