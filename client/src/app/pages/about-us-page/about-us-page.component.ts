import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-about-us-page',
  templateUrl: './about-us-page.component.html',
  styleUrls: ['./about-us-page.component.scss']
})
export class AboutUsPageComponent implements AfterViewInit{
  @ViewChild('middleBar') middleBar!: ElementRef<HTMLDivElement>;
  @ViewChild('leftScreen') leftScreen!: ElementRef<HTMLDivElement>;
  @ViewChild('rightScreen') rightScreen!: ElementRef<HTMLDivElement>;
  @ViewChild('body') body!:ElementRef;
  constructor(){
  };
  ngAfterViewInit(): void {
    
    this.leftScreen.nativeElement.addEventListener('mouseover',this.slidingAnimationRight.bind(this));
    this.rightScreen.nativeElement.addEventListener('mouseover',this.slidingAnimationLeft.bind(this));
    this.body.nativeElement.addEventListener('mouseover',this.backToInitialPosition.bind(this));
    

  }
  slidingAnimationRight(){
  console.log('sliding animation');
  if(this.middleBar.nativeElement.classList.contains("slideLeft") || this.middleBar.nativeElement.classList.contains("slideAllLeft")){
    this.middleBar.nativeElement.classList.remove("slideLeft");
    this.middleBar.nativeElement.classList.remove("slideAllLeft");
    this.middleBar.nativeElement.classList.add("slideAllRight");
  }
  else{
    this.middleBar.nativeElement.classList.remove("slideAllLeft");
    this.middleBar.nativeElement.classList.add("slideRight");
  }
}
slidingAnimationLeft(){
  console.log('sliding animation');
  if(this.middleBar.nativeElement.classList.contains("slideRight") || this.middleBar.nativeElement.classList.contains("slideAllRight") ){
    this.middleBar.nativeElement.classList.remove("slideAllRight");
    this.middleBar.nativeElement.classList.remove("slideRight");
    this.middleBar.nativeElement.classList.add("slideAllLeft");


  }
  else{
    this.middleBar.nativeElement.classList.remove("slideAllRight");
    this.middleBar.nativeElement.classList.add("slideLeft");
  }
 
 }
 backToInitialPosition(){

  // if(this.middleBar.nativeElement.classList.contains("slideRight") || this.middleBar.nativeElement.classList.contains("slideAllRight") ){
  //   this.middleBar.nativeElement.classList.remove("slideAllRight");
  //   this.middleBar.nativeElement.classList.remove("slideRight");
  //   this.middleBar.nativeElement.classList.add("slideLeft");
  // }
  // else if(this.middleBar.nativeElement.classList.contains("slideLeft") || this.middleBar.nativeElement.classList.contains("slideAllLeft")){
  //   this.middleBar.nativeElement.classList.remove("slideLeft");
  //   this.middleBar.nativeElement.classList.remove("slideAllLeft");
  //   this.middleBar.nativeElement.classList.add("slideRight");
  // }
}
}
