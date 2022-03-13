import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { MyFile } from '../../models/Files/file';
@Injectable({
  providedIn: 'root'
})
export class FilesService {

  
  URL = 'http://localhost:4000/files'
  constructor(private http: HttpClient) { 
    
  }

  createFile(master:string, title: string , description:string , MyFile:File) {
    const fd = new FormData();
    fd.append('master',master);
    fd.append('title',title);
    fd.append('description',description);
    fd.append('file',MyFile)
    return this.http.post(this.URL,fd)
  }

  getFiles(){
    return this.http.get<MyFile[]>(this.URL)
    
  }

  getFile(id:string){
    return this.http.get<MyFile>(`${this.URL}/${id}` )
  }

  deleteFile(id:string){
    return this.http.delete<MyFile>(`${this.URL}/${id}` )
  }
}
