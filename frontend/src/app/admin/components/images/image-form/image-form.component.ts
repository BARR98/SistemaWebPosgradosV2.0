import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/core/services/Image/image.service';
import { Router } from '@angular/router';


interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget 
}

@Component({
  selector: 'app-image-form',
  templateUrl: './image-form.component.html',
  styleUrls: ['./image-form.component.css']
})
export class ImageFormComponent implements OnInit {
  file!: File;
  photoSelected: string | ArrayBuffer | any;
  roles = ["Selecione una maestría","MSC","MARQ","MADM"];
  constructor(private imageService : ImageService,
    private router : Router) { }

  ngOnInit(): void {
    console.log(this.roles)
  }

  onPhotoSelected(event: HtmlInputEvent | any):void{
    if(event.target.files && event.target.files[0]){
      this.file = <File>event.target.files[0];
      //Image preview
      const reader = new FileReader();
      reader.onload = e => this.photoSelected = reader.result;
      reader.readAsDataURL(this.file);
      console.log(this.file)
    }
  }

  uploadPhoto(title: HTMLInputElement,description: HTMLTextAreaElement , master: HTMLSelectElement): boolean{
    console.log(title.value)
    console.log(description.value);
    console.log(master.value)
    console.log( master.value == this.roles[0])
  
    
    if((title.value != '') && (description.value!='') && (this.file != null) && ( (master.value !== this.roles[0]) ) ){
      this.imageService.createImage(title.value,description.value,this.file,master.value)
      .subscribe(res => {
        this.router.navigate(['/admin/logos'])
      }, err => console.log(err))
      return false;
    }
    alert("Complete todos los campos.")
  }
}
