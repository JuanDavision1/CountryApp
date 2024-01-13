import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';
import { Region } from '../../interfaces/region.type';


@Component({
  selector: 'app-byregionpage',
  templateUrl: './byregionpage.component.html',
  styles: [
  ]
})
export class ByregionpageComponent  implements OnInit{
public region:Country[]=[]
public regions:Region[] =['Africa','Americas','Asia','Europe','Oceania']
public  selectedRegion?:Region;
ngOnInit(): void {
    this.region = this.servicecountry.cacheStore.byregion.countries;
    this.selectedRegion = this.servicecountry.cacheStore.byregion.region;
}
constructor(private servicecountry:CountriesService){}
regionsearch(term:Region){
  this.selectedRegion  =term
  this.servicecountry.searchregion(term).subscribe((country)=>{
    this.region= country
  })
}

}
