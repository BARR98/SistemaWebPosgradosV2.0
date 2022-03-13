import { Component, OnInit } from '@angular/core';
import { Image } from 'src/app/core/models/Image/image';
import { ImageService } from 'src/app/core/services/Image/image.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-view-master-images',
  templateUrl: './view-master-images.component.html',
  styleUrls: ['./view-master-images.component.css']
})
export class ViewMasterImagesComponent implements OnInit {

  master_name!: string;
  photos:any;

  constructor(private imageService : ImageService,
    private activateRoute :ActivatedRoute,
    private router : Router) { }

  ngOnInit(): void {

    this.activateRoute.params.subscribe(
      params => {
        this.master_name = params['master']
      })
      this.imageService.getImages()
        .subscribe(res => {
        this.photos = res;
        console.log(this.photos);
        
    })
  }

  deleteimage(id:string){
    if(confirm("¿Desea eliminar éste elemento?")){
      this.imageService.deleteImage(id)
      .subscribe(res => {
        this.router.navigate(['/admin/logos'])
      })
    }
    this.router.navigate(['/admin/logos'])
  }

}
