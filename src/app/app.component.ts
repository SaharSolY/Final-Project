import { Component } from '@angular/core';
import { RouterOutlet  } from '@angular/router';
import { HeaderComponent } from '../component/header/header.component';
import { TableComponent } from '../component/header/table/table.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "../component/header/footer/footer.component"; 


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeaderComponent, TableComponent, CommonModule, FooterComponent]
})
export class AppComponent {
  title = 'ProjectRGAS';
}
