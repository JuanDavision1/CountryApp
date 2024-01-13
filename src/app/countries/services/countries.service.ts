import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,tap,map,of, catchError,delay } from 'rxjs';
import { Country } from '../interfaces/country';
import { CacheStore } from '../interfaces/cache-store';
import { Region } from '../interfaces/region.type';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  private apiurl = 'https://restcountries.com/v3.1';
public cacheStore:CacheStore={
  byCapital:{term:'',countries:[]},
  bycountries:{term:'',countries:[]},
  byregion:{region:'',countries:[]}

}
  constructor(private http: HttpClient) {
this.loadFromLocalStorage();
  }
private savelocalstorage(){
 localStorage.setItem('cachestore',JSON.stringify(this.cacheStore))
}
private loadFromLocalStorage(){
  if(!localStorage.getItem('cachestore'))return;
  this.cacheStore = JSON.parse(localStorage.getItem('cachestore')!)
}
  private getCountriesRequest(url:string):Observable<Country[]>{
    return this.http.get<Country[]>(url).pipe(
      catchError(()=> of([]))
      )
  }



  searchcountrybyalphacode(code: string): Observable<Country | null> {
    return this.http.get<Country[]>(`${this.apiurl}/alpha/${code}`).pipe(
      map(countries=>countries.length > 0 ? countries[0]:null),
      catchError(()=> of(null))
      
    );
  }

  searchcapital(term: string): Observable<Country[]> {
    const url=`${this.apiurl}/capital/${term}`
    return this.getCountriesRequest(url)
    .pipe(
      tap(countries=>{
this.cacheStore.byCapital={term:term,countries:countries}
      }),
      tap(()=>this.savelocalstorage())
    )
  }
searchcountry(term:string):Observable<Country[]>{
  const url=`${this.apiurl}/name/${term}`
  return this.getCountriesRequest(url)
  .pipe(
    tap(countries=>{
this.cacheStore.bycountries={term:term,countries:countries}
    }),
    tap(()=>this.savelocalstorage())

  )
}

 searchregion(region:Region):Observable<Country[]>{

  const url=`${this.apiurl}/region/${region}`
  return this.getCountriesRequest(url)
  .pipe(
    tap(countries=>{
this.cacheStore.byregion={region,countries:countries}
    }),
    tap(()=>this.savelocalstorage())

  )

}
}
