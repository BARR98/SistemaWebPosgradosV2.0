import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FilesService } from 'src/app/core/services/Files/files.service';

@Component({
  selector: 'app-files-list',
  templateUrl: './files-list.component.html',
  styleUrls: ['./files-list.component.css']
})
export class FilesListComponent implements OnInit {

  masters = ["MSC","MARQ","MADM"]
  files:[] |  any;
  msc_files:number = 0;
  marq_files:number = 0;
  madm_files:number = 0;

  constructor(private fileService : FilesService,
    private router : Router) { }

  ngOnInit(): void {
    this.fileService.getFiles().subscribe(
      res => {
        this.files = res
        console.log(this.files)
      })

  }

  selectedCard(master:string){
    this.router.navigate(['/admin/view-master-files',master])
  }





}
