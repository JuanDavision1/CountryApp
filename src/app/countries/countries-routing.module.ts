import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BycapitalpageComponent } from './pages/bycapitalpage/bycapitalpage.component';
import { BycountrypageComponent } from './pages/bycountrypage/bycountrypage.component';
import { ByregionpageComponent } from './pages/byregionpage/byregionpage.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';

const routes:Routes=[
    {
        path:'by-capital',
        component:BycapitalpageComponent
    },
    {
        path:'by-country',
        component:BycountrypageComponent
    },
    {
        path:'by-region',
        component:ByregionpageComponent
    },
    {
        path:'by/:id',
        component:CountryPageComponent
    },
    {
        path:'**',
        redirectTo:'by-capital'
    },
   
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],

})
export class CountriesRoutingModule { }
