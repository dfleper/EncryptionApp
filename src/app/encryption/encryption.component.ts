import { Component } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-encryption',
    imports: [CommonModule, FormsModule],
    templateUrl: './encryption.component.html',
    styleUrls: ['./encryption.component.css']
})
export class EncryptionComponent {
  plainText: string = '';
  encryptedText: string = '';
  decryptedText: string = '';
  secretKey: string = 'my-secret-key';  // Cambia esto por una clave más segura en producción

  // Función para encriptar texto
  encryptText() {
    if (this.plainText) {
      this.encryptedText = CryptoJS.AES.encrypt(this.plainText, this.secretKey.trim()).toString();
    }
  }

  // Función para desencriptar texto
  decryptText() {
    if (this.encryptedText) {
      const bytes = CryptoJS.AES.decrypt(this.encryptedText, this.secretKey.trim());
      this.decryptedText = bytes.toString(CryptoJS.enc.Utf8);
    }
  }

  // Función para pegar el texto encriptado y desencriptarlo
  pasteAndDecrypt(encryptedText: string) {
    this.encryptedText = encryptedText;
    this.decryptText();
  }
}
