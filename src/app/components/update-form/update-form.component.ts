import { Component } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.css'],
})
export class UpdateFormComponent {
  data = {
    depositAccount: { name: 'Chequing', balance: '' },
    creditCard: { name: 'CIBC VISA', balance: '' },
    lendingAccount: { name: 'RRSP Daily Interest Saving Account', balance: '' },
    mortgage: { name: 'Mortgage', balance: '' },
  };

  loading: boolean = false;

  constructor(private firebaseService: FirebaseService) {}

  onSubmit() {
    this.loading = true;
    this.firebaseService.updateValues(this.data).then(() => {
      alert('Data updated successfully');
      this.resetForm();
      this.loading = false;
    }).catch((error) => {
      console.error("Error updating data:", error);
      this.loading = false;
    });
  }

  resetForm() {
    this.data = {
      depositAccount: { name: 'Chequing', balance: '' },
      creditCard: { name: 'CIBC VISA', balance: '' },
      lendingAccount: { name: 'RRSP Daily Interest Saving Account', balance: '' },
      mortgage: { name: 'Mortgage', balance: '' },
    };
  }
}
