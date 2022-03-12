import { Component, OnInit } from '@angular/core';
import { MaestriasService } from 'src/app/core/services/maestrias/maestrias.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
@Component({
  selector: 'app-requisitos-permanencia',
  templateUrl: './requisitos-permanencia.component.html',
  styleUrls: ['./requisitos-permanencia.component.css']
})
export class RequisitosPermanenciaComponent implements OnInit {

  panelOpenState = true;
  _id: string
  master: any
  PARP_requisitos: string
  PARP_start: string



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
          this.PARP_start = this.master['procesos_administrativos']['PARequisitos_permanencia']['PARP_start']
          this.PARP_requisitos = this.master['procesos_administrativos']['PARequisitos_permanencia']['PARP_requisitos']
        });
    });
  }

}
