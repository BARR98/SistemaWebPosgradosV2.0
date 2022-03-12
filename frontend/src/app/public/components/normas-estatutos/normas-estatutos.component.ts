import { Component, OnInit } from '@angular/core';
import { MaestriasService } from 'src/app/core/services/maestrias/maestrias.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-normas-estatutos',
  templateUrl: './normas-estatutos.component.html',
  styleUrls: ['./normas-estatutos.component.css']
})
export class NormasEstatutosComponent implements OnInit {

  _id: string
  master: any
  normas: any   

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
          console.log(getedMaster)
          this.normas = this.master['normas_estatutos']['NEInformacion']

        });
    });
 
  }

}
