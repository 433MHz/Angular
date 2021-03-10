import { Component, OnInit } from '@angular/core';
import { CurrencyApiService, RootObject } from 'src/app/services/currency-api.service';

@Component({
  selector: 'app-currency-game',
  templateUrl: './currency-game.component.html',
  styleUrls: ['./currency-game.component.css']
})
export class CurrencyGameComponent implements OnInit {

  value: number;
  returnValue: string;
  rootObject: RootObject;

  constructor(private currencyApiService: CurrencyApiService) { }

  ngOnInit(): void {
    this.currencyApiService.getApi().subscribe(value => {
      this.rootObject = value;
    });
  }

  check(value: string){
    this.value = Number(value);

    if(this.value == this.rootObject.rates.PLN){
      this.returnValue = 'Odgadłeś wartość waluty!';
    }

    else if(this.value < this.rootObject.rates.PLN){
      this.returnValue = 'Wartośc waluty za mała';
    }

    else if(this.value > this.rootObject.rates.PLN){
      this.returnValue = 'Wartość waluty za duża';
    }
  }

}
