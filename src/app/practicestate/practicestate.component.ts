import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { NgxSpinnerService } from "ngx-spinner";  


@Component({
  selector: 'app-practicestate',
  templateUrl: './practicestate.component.html',
  styleUrls: ['./practicestate.component.scss']
})

export class PracticestateComponent implements OnInit {

  listArray : string[] = [];
  sum = 20;
  direction = "";
  searchText = '';
  RandomData: any;
  nametitle: string = '';
  firstname: string = '';
  lastname: string = '';
  array = []
  
  constructor(private api:ApiService,
    private SpinnerService: NgxSpinnerService,
    ) {
  }

  ngOnInit(): void {
    this.SpinnerService.show();
    this.api.getRandomData().subscribe((data) => {
      this.RandomData = data;
      console.log(this.RandomData);
      this.SpinnerService.hide();  
    })
  }

  getData(){
    this.SpinnerService.show();
    this.api.getRandomData().subscribe((data) => {
      this.RandomData = data;
      this.SpinnerService.hide();  
    })
  }

  }


