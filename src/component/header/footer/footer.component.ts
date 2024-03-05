import { MatButtonModule } from '@angular/material/button';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';



@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
