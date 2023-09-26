import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  user?: string | null = null;

  constructor(private service: AccountService) { }

  ngOnInit(): void {
    this.service.getRole().subscribe({
      next: (data) => { console.log(data); this.user = data; },
      error: (err) => { console.error(err); }
    })
  }

}
