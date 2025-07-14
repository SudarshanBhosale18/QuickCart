import { Component, EventEmitter, Output } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  @Output() navigate = new EventEmitter<string>();

  go(view: string) {
    this.navigate.emit(view);
  }
}
