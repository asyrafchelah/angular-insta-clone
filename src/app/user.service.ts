import { Injectable } from '@angular/core';
import { UserData } from './user-data';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userData =
    [
      {
        id: 3,
        profileImage: "http://next-curriculum-instagram.s3.amazonaws.com/idol2-blake.jpg",
        username: "blake",
        images: [
          "http://next-curriculum-instagram.s3.amazonaws.com/3-newyork1.jpg",
          "http://next-curriculum-instagram.s3.amazonaws.com/3-newtork2.jpg",
          "http://next-curriculum-instagram.s3.amazonaws.com/3-newyork3.jpg",
          "http://next-curriculum-instagram.s3.amazonaws.com/3-newyork4.jpg"
        ]
      },
      {
        id: 2,
        profileImage: "http://next-curriculum-instagram.s3.amazonaws.com/idol1-ryan.jpg",
        username: "ryanG",
        images: [
          "http://next-curriculum-instagram.s3.amazonaws.com/2-screenshot.jpg",
          "http://next-curriculum-instagram.s3.amazonaws.com/2-bali.jpg",
          "http://next-curriculum-instagram.s3.amazonaws.com/2-bali2.jpeg",
          "http://next-curriculum-instagram.s3.amazonaws.com/2-bali3.jpg",
          "http://next-curriculum-instagram.s3.amazonaws.com/2-bali4.jpeg",
          "http://next-curriculum-instagram.s3.amazonaws.com/2-bali5.jpg",
          "http://next-curriculum-instagram.s3.amazonaws.com/2-bali7.jpeg",
          "http://next-curriculum-instagram.s3.amazonaws.com/2-porscheboxsterspyder01.jpg"
        ]
      },
      {
        id: 283,
        profileImage: "http://next-curriculum-instagram.s3.amazonaws.com/profile-placeholder.jpg",
        username: "robertalan",
        images: []
      },
      {
        id: 1,
        profileImage: "http://next-curriculum-instagram.s3.amazonaws.com/bigfan-9AE7468E-4C35-41D1-AA68-31939891B5E1.png",
        username: "bigfan",
        images: [
          "http://next-curriculum-instagram.s3.amazonaws.com/1-paris2.jpeg",
          "http://next-curriculum-instagram.s3.amazonaws.com/1-paris3.jpeg",
          "http://next-curriculum-instagram.s3.amazonaws.com/1-paris4.jpg",
          "http://next-curriculum-instagram.s3.amazonaws.com/1-image.jpg"
        ]
      },
      {
        id: 449,
        profileImage: "http://next-curriculum-instagram.s3.amazonaws.com/profile-placeholder.jpg",
        username: "kokming11",
        images: []
      },
      {
        id: 450,
        profileImage: "http://next-curriculum-instagram.s3.amazonaws.com/profile-placeholder.jpg",
        username: "matt_the_tor-mentor",
        images: []
      },
      {
        id: 284,
        profileImage: "http://next-curriculum-instagram.s3.amazonaws.com/scenery-IMG_0319-sm.jpg",
        username: "testing123",
        images: []
      }
    ]

  public getUsers() {
    return this.userData;
  }

  public getImages(idx) {

    for (let x in this.userData) {
      if (this.userData[x].id == idx) {
        let idxImage = this.userData[x].images;
        return idxImage;
      }
    }
  }



  constructor() { }
}
