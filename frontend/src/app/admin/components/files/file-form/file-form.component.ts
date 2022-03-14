import { Component, OnInit } from '@angular/core';
import { FilesService } from 'src/app/core/services/Files/files.service';
import { Router } from '@angular/router';


interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget 
}

@Component({
  selector: 'app-file-form',
  templateUrl: './file-form.component.html',
  styleUrls: ['./file-form.component.css']
})
export class FileFormComponent implements OnInit {
  file!: File;
  fileSelected: string | ArrayBuffer | any;
  roles = ["Selecione una maestría","MSC","MARQ","MADM"];
  constructor(private fileService : FilesService,
    private router : Router) { }

  ngOnInit(): void {
    console.log(this.roles)
  }

  onfileSelected(event: HtmlInputEvent | any):void{
    if(event.target.files && event.target.files[0]){
      this.file = <File>event.target.files[0];
      //Image preview
      const reader = new FileReader();
      reader.onload = e => this.fileSelected = reader.result;
      reader.readAsDataURL(this.file);
      console.log(this.file)
    
    }
  }

  uploadFile(title: HTMLInputElement,description: HTMLTextAreaElement , master: HTMLSelectElement): boolean{
    console.log(title.value)
    console.log(description.value);
    console.log(master.value)
    console.log( master.value == this.roles[0])
  
    
    if((title.value != '') && (description.value!='') && (this.file != null) && ( (master.value !== this.roles[0]) ) ){
      this.fileService.createFile(master.value,title.value,description.value,this.file)
      .subscribe(res => {
        switch (master.value) {
          case 'MSC':
              this.router.navigate(['/admin/view-master-files/' + master.value])
            break;
          case 'MARQ':
              this.router.navigate(['/admin/view-master-files/' + master.value])
            break;
          case 'MADM':
              this.router.navigate(['/admin/view-master-files/' + master.value])
            break;
        
          default:
            break;
        }
        //this.router.navigate(['/admin/files-list'])
      }, err => console.log(err))
      return false;
    }
    alert("Complete todos los campos.")
  }

}
