import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap, tap } from 'rxjs';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: [
  ]
})
export class CountryPageComponent implements OnInit{
  public country?:Country;
constructor(private activateRoute:ActivatedRoute,private countryservice:CountriesService
  ,private router:Router ){}
  ngOnInit(): void {
this.activateRoute.params.pipe(
  switchMap(({id})=>this.countryservice.searchcountrybyalphacode(id)))
.subscribe(
  (country)=>{
    if(!country){
      return this.router.navigateByUrl('')
    }
  this.country = country;
   return;
  }
)
  }

}
