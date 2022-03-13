import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImageService } from 'src/app/core/services/Image/image.service';

@Component({
  selector: 'app-images-list',
  templateUrl: './images-list.component.html',
  styleUrls: ['./images-list.component.css']
})
export class ImagesListComponent implements OnInit {

  masters = ["MSC","MARQ","MADM"]
  photos:any;
  constructor(private imageService : ImageService,
    private router : Router) { }

  ngOnInit(): void {
    this.imageService.getImages().subscribe(
      res => {
        this.photos = res
        console.log(this.photos)
      })
  }

  selectedCard(master:string){
    this.router.navigate(['/admin/view-master-images',master])
  }


}
