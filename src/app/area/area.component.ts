import { Component, OnInit } from '@angular/core';
import { Area } from './area';
import { AreaService } from './area.service';
import { ServiceBudget } from '../service-budget/service-budget';
import { ServiceBudgetService } from '../service-budget/service-budget.service';

@Component({
  selector: 'select-area',
  templateUrl: './area.component.html',
})
export class AreaComponent implements OnInit {
  areas: Area[];
  public selectedArea: Area = {id: 0, name: ''};
  public serviceBudgets: ServiceBudget[];

  constructor(private areaService: AreaService, private serviceBudgetService: ServiceBudgetService) {}

  ngOnInit(): void {
    this.areaService
      .getAreas()
      .subscribe((areas) => (this.areas = areas));
  }

  onSelect(id:any):void {
    console.log('id: ', id)
    this.serviceBudgetService.getServiceBudgets(id)
      .subscribe((sbs) => (this.serviceBudgets = sbs));
  }


}
