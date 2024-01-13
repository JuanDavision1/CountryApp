import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-bycountrypage',
  templateUrl: './bycountrypage.component.html',
  styles: [
  ]
})
export class BycountrypageComponent implements OnInit {
public country:Country[]=[]
public initiValvalue:string='';
ngOnInit(): void {
  this.country = this.service.cacheStore.bycountries.countries
  this.initiValvalue = this.service.cacheStore.bycountries.term
  
}
  constructor(private service:CountriesService){}
  searchbycountry(term:string){
    this.service.searchcountry(term).subscribe((country)=>{
      this.country = country;
    })
  }
}
