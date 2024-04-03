import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopbarComponent } from './topbar/topbar.component';
import { MainViewComponent } from './main-view/main-view.component';
import { PostPreviewComponent } from './post-preview/post-preview.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TopbarComponent, MainViewComponent, PostPreviewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'concept';
}
