import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BycapitalpageComponent } from './pages/bycapitalpage/bycapitalpage.component';
import { BycountrypageComponent } from './pages/bycountrypage/bycountrypage.component';
import { ByregionpageComponent } from './pages/byregionpage/byregionpage.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';
import { CountriesRoutingModule } from './countries-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CountryTableComponent } from './components/country-table/country-table.component';



@NgModule({
  declarations: [
    BycapitalpageComponent,
    BycountrypageComponent,
    ByregionpageComponent,
    CountryPageComponent,
    CountryTableComponent
  ],
  imports: [
    CommonModule,
    CountriesRoutingModule,
    SharedModule
  ]
})
export class CountriesModule { }
