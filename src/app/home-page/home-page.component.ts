import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  userData =[]

  constructor(private userservice: UserService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.userData  = this.userservice.getUsers()
  }

}
