//1. ROOT MODULE - company department - instructs Angular how to assemble our application.
import { NgModule }      from '@angular/core'; //general Module code from the Angular framework's core
import { BrowserModule } from '@angular/platform-browser'; // imports code necessary to run our app in the browser
import { AppComponent }   from './app.component';// refers to the root component we created
import { FormsModule }  from '@angular/forms';// Forms for ngModel

//2. Module Decorator
@NgModule({ // decorator to make it accessible to all components with this module
  imports: [ BrowserModule, FormsModule ],//imports array under the decorator imports other pieces of our application we want included in this module.
  declarations: [ AppComponent ], //array of all components that will reside in this module
  bootstrap:    [ AppComponent ] // array of components required immediately upon launching the application
})

//3. Class Declaration
export class AppModule { } //standard name for the root module's class declaration.
