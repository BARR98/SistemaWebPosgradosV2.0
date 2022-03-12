import { Component, OnInit } from '@angular/core';
import { MaestriasService } from 'src/app/core/services/maestrias/maestrias.service';
import { ActivatedRoute, Router, Params } from '@angular/router';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  panelOpenState = true;
  _id: string
  master: any
  telefonos: []
  redes: []
  direcciones: []
  correos:[]
  facebook: string = "Facebook"
  red_nombre : string
  instagram: string = "Instagram"
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
          this.telefonos = this.master['contacto']['CTelefonos']
          this.direcciones = this.master['contacto']['CDireccion']
          this.redes = this.master['contacto']['CRedes']
          this.correos = this.master['contacto']['CCorreo']
          
        });
    });
  }


}
