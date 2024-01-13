import { Country } from "./country"
import { Region } from "./region.type";

export interface CacheStore{
    byCapital:TermCountries;
    bycountries:TermCountries;
    byregion:RegCountries;
}

export interface TermCountries{
term:string,
countries:Country[];

}

export interface RegCountries{
    region?:Region,
    countries:Country[];
    
    }