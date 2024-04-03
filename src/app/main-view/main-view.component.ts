import { Component } from '@angular/core';
import { PostPreviewComponent } from '../post-preview/post-preview.component';

@Component({
  selector: 'app-main-view',
  standalone: true,
  imports: [PostPreviewComponent],
  templateUrl: './main-view.component.html',
  styleUrl: './main-view.component.css'
})
export class MainViewComponent {

}
