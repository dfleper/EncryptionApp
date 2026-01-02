import { Component } from '@angular/core';
import { EncryptionComponent } from './encryption/encryption.component';

@Component({
    selector: 'app-root',
    imports: [EncryptionComponent],
    templateUrl: './app.component.html',
    styles: []
})
export class AppComponent {
  title = 'encryption-app';
}
