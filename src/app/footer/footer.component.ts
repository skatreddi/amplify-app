import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onNavigate(){
    window.open("https://www.cafee.wvu.edu/", "_blank");
    // window.location.href="https://www.cafee.wvu.edu/";
}

}
