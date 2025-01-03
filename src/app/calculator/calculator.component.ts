import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator-base',
  standalone: true,
  imports: [],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  resultButton:boolean = false;
  resultScreenList:[] = [];
  tempNumbers:number[] = [];

  calculate(resultButton: boolean){
    this.resultButton = resultButton;
    resultButton = false;
    while(resultButton == false){

    }
    resultButton = true;
  }

  addNumber(number:number){
    this.tempNumbers.push(number);
  }
}
