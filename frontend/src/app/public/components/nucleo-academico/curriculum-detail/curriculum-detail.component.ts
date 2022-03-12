import { Component, OnInit } from '@angular/core';
import { MaestriasService } from 'src/app/core/services/maestrias/maestrias.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
@Component({
  selector: 'app-curriculum-detail',
  templateUrl: './curriculum-detail.component.html',
  styleUrls: ['./curriculum-detail.component.css']
})
export class CurriculumDetailComponent implements OnInit {


  panelOpenState = true;
  _id: string
  master: any
  docentes: any
  DCurriculum: string
  DEspecialidad: string
  DGrado_academico: string
  DNombre: string
  DTiempo: string

  constructor(
    public maestriasService: MaestriasService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this._id = this.activatedRoute.snapshot.paramMap.get('id')
      this.DNombre = this.activatedRoute.snapshot.paramMap.get('DNombre')
      console.log(this.DNombre)
      console.log(this._id)
      this.maestriasService.getMaestria(this._id)
        .subscribe(getedMaster => {
          this.master = getedMaster
          this.docentes = this.master['docentes']['NADocentes']
          for (let index = 0; index < this.docentes.length; index++) {
            if ( this.docentes[index]['DNombre'] === this.DNombre ) {
              this.DCurriculum = this.docentes[index]['DCurriculum']
              console.log(this.DCurriculum)
            }
            
          }

          



        });

    });

    console.log("Hola")
  }

  




}
