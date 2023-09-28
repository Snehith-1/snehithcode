import { Component,ViewChild,ElementRef } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { ToastrService } from 'ngx-toastr';
import { Popover } from 'bootstrap';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild("hoverBtn") hoverBtn!: ElementRef;
  data: any[] = [
    { id: 1, name: 'Item 1', showDetails: false },
    { id: 2, name: 'Item 2', showDetails: false },
    // Add more items here
  ];

  toggleDetails(item: any): void {
    item.showDetails = !item.showDetails;
  }
  title = 'angular';
  constructor(
    private toast: NgToastService ,private toastr: ToastrService
  ) { }
  ngOnInit() {
    //Select all the html button elements have attribute data-bs-toggle="popover" will apply popver toggle event
    Array.from(document.querySelectorAll('button[data-bs-toggle="popover"]'))
    .forEach(popoverNode => new Popover(popoverNode))
    
 
    
  }
  

  showSuccess() {
    this.toast.success({detail:"SUCCESS",summary:'Your Success Message',duration:5000});
  }

  showError() {
    this.toast.error({detail:"ERROR",summary:'Your Error Message',duration:5000});
  }

  showInfo() {
    this.toast.info({detail:"INFO",summary:'Your Info Message',duration:5000});
  }

  showWarn() {
    this.toast.warning({detail:"WARN",summary:'Your Warn Message',duration:5000});
  }
  showSuccessTopCenter() {
    this.toast.success({detail:"SUCCESS",summary:'Your Success Message',duration:5000, position:'topCenter'});
  }

  //show Toast on bottom center position
  showErrorBottonCenter() {
    this.toast.error({detail:"ERROR",summary:'Your Error Message',duration:5000,position: 'botomCenter'});
  }

  //show Toast on top left position
  showInfotopleft() {
    this.toast.info({detail:"INFO",summary:'Your Info Message',duration:5000, position: 'topLeft'});
  }

  //show Toast on bottom left position
  showWarnbottomleft() {
    this.toast.warning({detail:"WARN",summary:'Your Warn Message',duration:5000, position: 'bottomLeft'});
  }

  //show Toast on top right position
  showInfotopRight() {
    this.toast.info({detail:"INFO",summary:'Your Info Message',duration:5000, position: 'topRight'});
  }

  //show Toast on bottom right position
  showWarnbottomRight() {
    this.toast.warning({detail:"WARN",summary:'Your Warn Message',duration:5000, position: 'bottomRight'});
  }



  //////
  toastrshowSuccess() {
    
    this.toastr.success("success")
  }

  toastrshowError() {
    this.toastr.error("error")
  }

  toastrshowInfo() {
    this.toastr.info("info")
  }

  toastrshowWarn() {
    this.toastr.warning("warn")
  }



  mouseEnter() {
    console.log("mouseEnter", this.hoverBtn.nativeElement);
    this.hoverBtn.nativeElement.click();
  }

  mouseLeave() {
    console.log("mouse leave :");
    this.hoverBtn.nativeElement.click();
  }
}


