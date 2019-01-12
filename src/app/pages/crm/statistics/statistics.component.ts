import { Component, OnInit, OnDestroy } from '@angular/core';
import { CasesService } from '../../../services/cases.service';
import { Observable } from 'rxjs/Observable';
import { Case } from '../../../models/case';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: []
})
export class StatisticsComponent implements OnDestroy {
  private casesObservable: Subscription;

  // Doughnut
  public doughnutChartLabels: string[] = ['Close', 'Open'];
  public doughnutChartData: number[] = [0, 0];
  public doughnutChartType: string = 'doughnut';

  // Chart data model
  public chartDataModel: any;

  // Bar
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales: {
      yAxes: [{
          ticks: {
              beginAtZero: true
          },
          gridLines: {
              display: true
          },
          stacked: true
      }],
      xAxes: [{
          gridLines: {
              display: true
          },
          display: true,
          stacked: true
      }]
    }
  };
  public barChartLabels: string[] = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = false;
  public barChartData: any[] = [{data: []}];

  constructor(
    private caseService: CasesService
  ) {
    this.casesObservable = this.caseService.getCasesObservable().subscribe(cases => {
      this.chartDataModel = this.getChartDataModel(cases);

      this.doughnutChartData = this.chartDataModel.chartDoughnut;

      const clone = JSON.parse(JSON.stringify(this.barChartData));
      clone[0].data = this.chartDataModel.chartBar;
      this.barChartData = clone;

    });
  }

  private getChartDataModel(cases: Case[]) {
    const numCases: number = cases.length;
    let numOpenCases: number;
    const chartDoughnut: number[] = [0, 0];
    const chartBar: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    cases.forEach(item => {
      // Doughnut chart logic
      if (item.finalizationdate) {
        chartDoughnut[0]++;
      } else {
        chartDoughnut[1]++;
      }

      // Bar chart logic
      chartBar[new Date(item.finalizationdate).getMonth()]++;
    });

    numOpenCases = chartDoughnut[1];

    return {
      chartDoughnut,
      chartBar,
      numCases,
      numOpenCases
    };
  }

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  ngOnDestroy() {
    this.casesObservable.unsubscribe();
  }
}
