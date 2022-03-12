import { Component, OnInit } from '@angular/core';
import { MaestriasService } from 'src/app/core/services/maestrias/maestrias.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-requisitos-ingreso',
  templateUrl: './requisitos-ingreso.component.html',
  styleUrls: ['./requisitos-ingreso.component.css']
})
export class RequisitosIngresoComponent implements OnInit {

  panelOpenState = true;
  _id: string
  master: any
  PARI_requisitos_start: string
  PARI_requisitos: []
  PARI_documentacion_start: string
  PARI_documentos: []


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
          this.PARI_requisitos_start = this.master['procesos_administrativos']['PARequisitos_ingreso']['PARI_start']
          this.PARI_requisitos = this.master['procesos_administrativos']['PARequisitos_ingreso']['PARI_requisitos']
          this.PARI_documentacion_start = this.master['procesos_administrativos']['PARequisitos_ingreso']['PARI_documentacion_start']
          this.PARI_documentos = this.master['procesos_administrativos']['PARequisitos_ingreso']['PARI_documentos']

        });
    });
  }
}
