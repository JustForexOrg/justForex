import { Component, ElementRef } from '@angular/core';
import {  FileUploader } from 'ng2-file-upload/ng2-file-upload';

//define the constant url we would be uploading to.
const URL = 'http://localhost:4200/upload';

@Component({
  templateUrl: './myprofile.component.html',
  styleUrls: [
    './myprofile.component.css'
  ]
})

export class MyProfileComponent {
  //declare a property called fileuploader and assign it to an instance of a new fileUploader.
  //pass in the Url to be uploaded to, and pass the itemAlais, which would be the name of the //file input when sending the post request.
  public uploader:FileUploader = new FileUploader({url: URL, itemAlias: 'photo'});

  currentUser;
  isSent: boolean = false;
  hasPic: boolean = false;

  constructor(private element: ElementRef) {

  }

  ngOnInit() {
    this.currentUser = JSON.parse(JSON.parse(localStorage.getItem('currentUser'))._body);
    if (this.currentUser.profile_pic) {
        this.hasPic = true;
    }
    // console.log(this.currentUser);
    //override the onAfterAddingfile property of the uploader so it doesn't authenticate with //credentials.
    this.uploader.onAfterAddingFile = (file)=> { file.withCredentials = false; };
    //overide the onCompleteItem property of the uploader so we are
    //able to deal with the server response.
    this.uploader.onCompleteItem = (item:any, response:any, status:any, headers:any) => {
         console.log("ImageUpload:uploaded:", item, status, response);
     };

  }

  onImageChange(event) {
    var reader = new FileReader();
    var image = this.element.nativeElement.querySelector('#myImage');

    reader.onload = function(e: any) {
        var src = e.target.result;
        image.src = src;
    };

    reader.readAsDataURL(event.target.files[0]);
  }

  public resetSentData() {
    this.isSent = false;
  }

}
