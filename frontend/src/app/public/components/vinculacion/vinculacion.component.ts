import { Component, OnInit } from '@angular/core';
import { MaestriasService } from 'src/app/core/services/maestrias/maestrias.service';
import { ActivatedRoute, Router, Params } from '@angular/router';


@Component({
  selector: 'app-vinculacion',
  templateUrl: './vinculacion.component.html',
  styleUrls: ['./vinculacion.component.css']
})
export class VinculacionComponent implements OnInit {

  panelOpenState = true;
  _id: string
  master: any
  vinculacion_convenios: any
  vinculacion_informacion: string


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
          this.vinculacion_convenios = this.master['vinculacion']['VConvenios']
          this.vinculacion_informacion = this.master['vinculacion']['VInformacion']
        });
    });
  }

}
