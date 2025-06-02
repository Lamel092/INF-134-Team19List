import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-post',
  standalone: true,               
  imports: [ CommonModule, ReactiveFormsModule ],
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent {

  postForm: FormGroup;
  showConfirm = false;

  constructor(
    private fb: FormBuilder, 
    private router: Router
  ) {
    this.postForm = this.fb.group({
      title: [''],
      city: ['Los Angeles'],
      category: ['Pets'],
      zipcode: [''],
      description: [''],
      price: [''],
      contactName: [''],
      email: [''],
      emailPrivacy: [true],
      phone: [''],
      textOk: [true],
      callsOk: [false],
      pictures: [null],
      video: [null]
    });
  }

  onFileChange(event: any, controlName: string) {
    const file = event.target.files[0];
    if (file) {
      this.postForm.patchValue({ [controlName]: file });
    }
  }

  onSubmit() {
    if (this.postForm.valid) {
      const formData = new FormData();
      Object.entries(this.postForm.value).forEach(([key, value]) => {
        if (value instanceof File) {
          formData.append(key, value, value.name);
        } else {
          formData.append(key, value as string);
        }
      });
      // Submit `formData` to backend via a service
      console.log('Form submitted:', this.postForm.value);
    }
  }

  confirmLeave() {
    this.showConfirm = true;
  }

  leave() {
    this.router.navigate(['/landing']);
  }

  cancelLeave() {
    this.showConfirm = false;
  }
}
