import { Component } from '@angular/core';
import { EncryptionComponent } from './encryption/encryption.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EncryptionComponent],
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  title = 'encryption-app';
}
