import { Component, OnInit } from '@angular/core';
import { MaestriasService } from 'src/app/core/services/maestrias/maestrias.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-caracteristicas-tesis',
  templateUrl: './caracteristicas-tesis.component.html',
  styleUrls: ['./caracteristicas-tesis.component.css']
})
export class CaracteristicasTesisComponent implements OnInit {

  panelOpenState = true;
  _id: string
  master: any
  start: string
 requisitos: []


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
          this.start = this.master['general']['GCaracteristicas_tesis']['GCT_start']
          this.requisitos = this.master['general']['GCaracteristicas_tesis']['GCT_requisitos']
         
        });
    });
  }
}
