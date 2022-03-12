import { Component, OnInit } from '@angular/core';
import { MaestriasService } from 'src/app/core/services/maestrias/maestrias.service';
import { ActivatedRoute, Router, Params } from '@angular/router';


@Component({
  selector: 'app-requisitos-egreso',
  templateUrl: './requisitos-egreso.component.html',
  styleUrls: ['./requisitos-egreso.component.css']
})
export class RequisitosEgresoComponent implements OnInit {

  panelOpenState = true;
  _id: string
  master: any
  PARE_obtencion_grado_start: string
  PARE_obtencion_grado_requisitos: []
  PARE_requisitos: []
  PARE_start: string


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
          this.PARE_obtencion_grado_start = this.master['procesos_administrativos']['PARequisitos_egreso']['PARE_obtencion_grado_start']
          this.PARE_obtencion_grado_requisitos = this.master['procesos_administrativos']['PARequisitos_egreso']['PARE_obtencion_grado_requisitos']
          this.PARE_requisitos = this.master['procesos_administrativos']['PARequisitos_egreso']['PARE_requisitos']
          this.PARE_start = this.master['procesos_administrativos']['PARequisitos_egreso']['PARE_start']

        });
    });
  }

}
