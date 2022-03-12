import { Component, OnInit } from '@angular/core';
import { MaestriasService } from 'src/app/core/services/maestrias/maestrias.service';
import { ActivatedRoute, Router, Params } from '@angular/router';


@Component({
  selector: 'app-seleccion-aspirantes',
  templateUrl: './seleccion-aspirantes.component.html',
  styleUrls: ['./seleccion-aspirantes.component.css']
})
export class SeleccionAspirantesComponent implements OnInit {
  panelOpenState = true;
  _id: string
  master: any
  seleccion_aspirantes: any

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
          this.seleccion_aspirantes = this.master['general']['GProceso_seleccion_aspirantes']['GPSA_requisitos']
          console.log(this.seleccion_aspirantes['GPSA_start'])
        });
    });
  }

}
