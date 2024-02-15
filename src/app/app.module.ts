import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        //AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        //RouterModule,
        //AppRoutesModule
    ],
    providers: [],
    bootstrap: [
        //AppComponent
    ]
})

export class AppModule{}

//import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

//function bootstrapApplication() {
    //platformBrowserDynamic().bootstrapModule(AppModule)
        //.catch(err => console.error(err));
//}

//bootstrapApplication();