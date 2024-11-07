import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { LoginHeaderComponent } from '../login-header/login-header.component';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { LoginFooterComponent } from '../login-footer/login-footer.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [LoginHeaderComponent, CommonModule, MatIconModule, LoginFooterComponent,FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isPopoverVisible = false;
  cardNumber = '';
  password = '';
  showPassword = false;
  isFormValid = false;
  cardNumberErrorMessage = '';
  passwordErrorMessage ='';

  constructor(private router: Router) {}

  togglePopover(event: MouseEvent): void {
    event.stopPropagation();
    this.isPopoverVisible = !this.isPopoverVisible;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (!target.closest('.ui-set-popover-wrapper')) {
      this.isPopoverVisible = false;
    }
  }

  hidePopover(): void {
    this.isPopoverVisible = false;
  }

  restrictToNumbers(event: KeyboardEvent): void {
    const allowedKeys = ['Backspace', 'Tab', 'ArrowLeft', 'ArrowRight', 'Delete'];
    const isNumberKey = event.key >= '0' && event.key <= '9';

    if (!isNumberKey && !allowedKeys.includes(event.key)) {
      event.preventDefault();
    }
  }

  formatCardNumber(): void {
    this.cardNumber = this.cardNumber.replace(/\D/g, '').replace(/(\d{4})(?=\d)/g, '$1 ');
    this.cardNumber = this.cardNumber.substring(0, 19);

    // Show error message if card number is empty
    this.cardNumberErrorMessage = this.cardNumber.trim() === '' ? 'Please enter your card number' : '';
    this.checkFormValidity();
  }

  checkFormValidity(): void {

    this.passwordErrorMessage = this.password.trim() === '' ? 'Please enter your password' : '';
  
    this.isFormValid = this.cardNumber.replace(/\s/g, '').length === 16 && this.password.length > 0;
  }

  onSignOn(): void {
    if (this.isFormValid) {
      this.router.navigate(['/online-banking']);
    }
  }
}
