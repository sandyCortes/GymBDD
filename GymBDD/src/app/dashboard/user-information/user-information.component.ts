import { Component, OnInit } from '@angular/core';
import { ConnectionService } from './../../Services/connection.service';

@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.css']
})
export class UserInformationComponent implements OnInit {

  constructor(private connection: ConnectionService) { 
    connection.getUsers()
    .subscribe(data => {
      console.log("Data: ",data);
    })
  }

  ngOnInit() {
  }

}
