import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
  allowNewServer =false;
  serverCreationStatus = 'No server was created!'
  serverName = 'Place holder name for server'
  username = '';

  constructor() { 


    setTimeout(()=> {
      this.allowNewServer = true
    },2000)

  }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: any){
    this.serverName = event.target.value
  }

  resetUsername(){
    this.username = '';
  }

}
