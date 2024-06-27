import { Component } from '@angular/core';
import { EncryptionComponent } from './encryption/encryption.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EncryptionComponent],
  template: '<app-encryption></app-encryption>',
  styles: []
})
export class AppComponent {
  title = 'encryption-app';
}
