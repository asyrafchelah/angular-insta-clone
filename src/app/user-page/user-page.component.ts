import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {
  images = []




  constructor(private userservice: UserService, private route: ActivatedRoute) { }

  ngOnInit() {

    let userIndex = this.route.snapshot.params.userIndex
    this.images = this.userservice.getImages(userIndex)
  }

}
