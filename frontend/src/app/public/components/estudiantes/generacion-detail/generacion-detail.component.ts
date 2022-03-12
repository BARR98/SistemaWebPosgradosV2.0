import { Component, OnInit } from '@angular/core';
import { MaestriasService } from 'src/app/core/services/maestrias/maestrias.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
@Component({
  selector: 'app-generacion-detail',
  templateUrl: './generacion-detail.component.html',
  styleUrls: ['./generacion-detail.component.css']
})
export class GeneracionDetailComponent implements OnInit {

  panelOpenState = true;
  _id: string
  master: any
  alumnos: any
  generacion: string


  constructor(
    public maestriasService: MaestriasService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this._id = this.activatedRoute.snapshot.paramMap.get('id')
      this.generacion = this.activatedRoute.snapshot.paramMap.get('generacion')
      console.log(this._id)
      console.log(this.generacion)
      this.maestriasService.getMaestria(this._id)
        .subscribe(getedMaster => {
          this.master = getedMaster
          console.log(this.master)
          this.alumnos = this.master['Estudiantes']['Estudiante']

        });

    });

  }



}
