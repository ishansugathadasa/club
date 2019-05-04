import { Component, OnInit } from '@angular/core';
import { HistoryService } from '../../../../shared/history.service';
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';
import { History } from '../../../../shared/history.model';
@Component({
  selector: 'app-ins-history',
  templateUrl: './ins-history.component.html',
  styleUrls: ['./ins-history.component.css'],
  providers:[HistoryService]
})
export class InsHistoryComponent implements OnInit {

  constructor(public UserProfileService: HistoryService, private router: Router) { }

  ngOnInit() {
    this.HistoryList();
  }
  HistoryList()
  {
    this.UserProfileService.getHistoryList().subscribe((res)=> {
      this.UserProfileService.history= res as History[];
    });
  }

}
