import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-image-slider",
  templateUrl: "./image-slider.component.html",
  styleUrls: ["./image-slider.component.css"],
})
export class ImageSliderComponent {
  name = "Angular";
  imageObject = [
    {
      image: "assets/images/big/img1.jpg",
      thumbImage: "assets/images/big/img1.jpg",
      title: "Image 1",
    },
    {
      image: "assets/images/big/img2.jpg",
      thumbImage: "assets/images/big/img2.jpg",
      title: "Image 1",
    },
    {
      image: 'assets/images/big/img3.jpg',
      thumbImage: 'assets/images/big/img2.jpg',
      title: 'Image 1'
    },
    {
      image: 'assets/images/big/img1.jpg',
      thumbImage: 'assets/images/big/img1.jpg',
      title: 'Image 1'
    },
    {
      image: 'assets/images/big/img1.jpg',
      thumbImage: 'assets/images/big/img1.jpg',
      title: 'Image 1'
    },
    {
      image: 'assets/images/big/img1.jpg',
      thumbImage: 'assets/images/big/img1.jpg',
      title: 'Image 1'
    },
  ];
}
