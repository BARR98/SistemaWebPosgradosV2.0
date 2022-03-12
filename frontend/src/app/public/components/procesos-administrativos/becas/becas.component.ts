import { Component, OnInit } from '@angular/core';
import { MaestriasService } from 'src/app/core/services/maestrias/maestrias.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-becas',
  templateUrl: './becas.component.html',
  styleUrls: ['./becas.component.css']
})
export class BecasComponent implements OnInit {

  panelOpenState = true;
  _id: string
  master: any
  becas_start: string
  becas_requisitos: []



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
          this.master = getedMaster
          this.becas_start = this.master['procesos_administrativos']['PABecas']['PAB_start']
          this.becas_requisitos = this.master['procesos_administrativos']['PABecas']['PAB_requisitos']
        });
    });
  }

}
