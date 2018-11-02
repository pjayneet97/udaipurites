import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  title="Explore Udaipur in a Better way"
  subtitle="Open platform for udaipurites to unfold Udaipur in their own way!!!"
  constructor() { }

  ngOnInit() {
  }

}
