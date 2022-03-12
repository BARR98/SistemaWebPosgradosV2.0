import { Component, OnInit } from '@angular/core';
import { MaestriasService } from 'src/app/core/services/maestrias/maestrias.service';
@Component({
  selector: 'app-select-master',
  templateUrl: './select-master.component.html',
  styleUrls: ['./select-master.component.css']
})
export class SelectMasterComponent implements OnInit {

  panelOpenState = true;
  masters: any = []
  constructor(private maestriasService: MaestriasService) { }

  ngOnInit(): void {
    this.getMasters()

  }

  getMasters() {
    this.maestriasService.getAllMaestrias()
      .subscribe(masters => {
        this.masters = masters;
        console.log(masters)
      });
  }


}
