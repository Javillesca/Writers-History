import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Routing
import { AppRoutingModule } from './app-routing.module';

// Services
import { WritersService } from './services/writers.service';

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { WritersComponent } from './components/writers/writers.component';
import { WriterComponent } from './components/writer/writer.component';
import { SeekerComponent } from './components/shared/seeker/seeker.component';
import { CardWriterComponent } from './components/shared/card-writer/card-writer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    WritersComponent,
    WriterComponent,
    SeekerComponent,
    CardWriterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    WritersService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
