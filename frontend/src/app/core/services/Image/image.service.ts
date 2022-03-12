import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Image } from '../../models/Image/image';
@Injectable({
  providedIn: 'root'
})
export class ImageService {

  URL = 'http://localhost:4000/images'
  constructor(private http: HttpClient) { 
    
  }

  createImage(title: string , description:string , Image:File) {
    const fd = new FormData();
    fd.append('title',title);
    fd.append('description',description);
    fd.append('image',Image)
    return this.http.post(this.URL,fd)
  }

  getImages(){
    return this.http.get<Image[]>(this.URL)
    
  }

  getImage(id:string){
    return this.http.get<Image>(`${this.URL}/${id}` )
  }

  deleteImage(id:string){
    return this.http.delete<Image>(`${this.URL}/${id}` )
  }
}
