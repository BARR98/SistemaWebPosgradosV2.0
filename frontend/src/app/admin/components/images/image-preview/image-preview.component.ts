import { Component, OnInit } from '@angular/core';
import { Image } from 'src/app/core/models/Image/image';
import { ImageService } from 'src/app/core/services/Image/image.service';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-image-preview',
  templateUrl: './image-preview.component.html',
  styleUrls: ['./image-preview.component.css']
})
export class ImagePreviewComponent implements OnInit {
  id!: string;
  image!:Image;

  constructor(private imageService : ImageService,
    private activateRoute :ActivatedRoute,
    private router : Router) { }

  ngOnInit(): void {

    this.activateRoute.params.subscribe(
      params => {
        this.id = params['id']
      })
      this.imageService.getImage(this.id)
        .subscribe(res => {
        this.image = res;
        console.log(this.image);
        
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
