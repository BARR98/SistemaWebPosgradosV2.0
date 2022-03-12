import { Component, OnInit } from '@angular/core';
import { MaestriasService } from 'src/app/core/services/maestrias/maestrias.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-repositorio-tesis',
  templateUrl: './repositorio-tesis.component.html',
  styleUrls: ['./repositorio-tesis.component.css']
})
export class RepositorioTesisComponent implements OnInit {

  cpanelOpenState = true;
  _id: string
  master: any
  repositorio_tesis: any


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
          this.repositorio_tesis = this.master['docentes']['NARepositorio_tesis']
          


        });
    });
  }

}
