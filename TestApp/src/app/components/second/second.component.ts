import { Component, OnInit } from '@angular/core';
import { CurrencyApiService, RootObject } from 'src/app/services/currency-api.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  rootObject: RootObject;
  value: number;
  message: string;

  constructor(private currencyApiService: CurrencyApiService) {  
  }

  ngOnInit(): void {
    this.currencyApiService.getCurrency().subscribe(value => {
      this.rootObject = value;
    });
  }


  check(value: string){
    this.value = Number(value);
    
    if(this.value == this.rootObject.rates.PLN){
      this.message = "Podałeś prawidłową wartość";
    }
    else if(this.value > this.rootObject.rates.PLN){
      this.message = "Podałeś za dużą wartość";
    }
    else if(this.value < this.rootObject.rates.PLN){
      this.message = "Podałeś za małą wartość";
    }
  }

  
}

