import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-bycapitalpage',
  templateUrl: './bycapitalpage.component.html',
  styles: [],
})
export class BycapitalpageComponent implements OnInit{
  public countries: Country[] = [];
  public isLoading:boolean=false;
  public initiValvalue:string ='';
  constructor(private countriesService: CountriesService) {}
  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCapital.countries
    this.initiValvalue = this.countriesService.cacheStore.byCapital.term
    
      }
  serachbycapital(term: string) {
    this.isLoading=true;
    this.countriesService.searchcapital(term).subscribe((countries) => {
      this.countries = countries;
      this.isLoading=false;
    });

  }
}
