import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { NgxSpinnerService } from "ngx-spinner";  
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

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
  array = [];
  closeResult = '';
  
  constructor(private api:ApiService,
    private SpinnerService: NgxSpinnerService,
    private modalService: NgbModal,
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

  // getData(){
  //   this.SpinnerService.show();
  //   this.api.getRandomData().subscribe((data) => {
  //     this.RandomData = data;
  //     this.SpinnerService.hide();  
  //   })
  // }


  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  }


