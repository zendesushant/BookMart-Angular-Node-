import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthServices } from '../auth-services/auth.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  constructor(private authService:AuthServices) { }
  imageFrom:FormGroup;
  previewImg
  ngOnInit(): void {
    this.imageFrom=new FormGroup({
      image:new FormControl(null)
    })
  }
  

  onPicked(event:Event)
  {
    let img=(<HTMLInputElement>event.target).files[0];
    this.imageFrom.patchValue({
      image:img
    })
    let reader=new FileReader();
    reader.onload=()=>{
this.previewImg=reader.result;
    };
    reader.readAsDataURL(img);
    

  }
postedImage
onPostImage()
{
  console.log("PostImage Called");
  this.authService.onPostImage(this.imageFrom.value.image.name,this.imageFrom.value.image).subscribe((result)=>{
    console.log(result)
    this.postedImage=result.imagePath;
  })
}

}
