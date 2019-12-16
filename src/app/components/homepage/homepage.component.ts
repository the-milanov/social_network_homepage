import { Component, OnInit } from '@angular/core';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faSearch, faUsers, faComment } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  faIcon = faTwitter;
  faSearch = faSearch;
  faUsers = faUsers;
  faComment= faComment;
  constructor() { }

  ngOnInit() {
  }

}
