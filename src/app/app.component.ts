import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from "./footer/footer.component";
import { MaterialModule } from './material/material.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: 'app.component.html',  
  imports: [RouterModule, HeaderComponent, FooterComponent , MaterialModule ,MatFormFieldModule,MatInputModule, MatSelectModule]
 
})
export class AppComponent { }
