import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  private readonly fb = inject(FormBuilder);
  public readonly isSubmitting = signal<boolean>(false);
  private readonly msg = inject(MessageService);

  constructor(private http: HttpClient){}

  FormContact = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required],
  });

  onSubmit() {
    if (this.FormContact.invalid) {
      this.FormContact.markAllAsTouched();
      this.msg.add({
        severity: 'error',
        summary: 'Campos incompletos',
        detail: 'Por favor, completa correctamente todos los campos obligatorios.',
      });
      return;
    }

    this.isSubmitting.set(true);

    const rawValues = this.FormContact.value;
    const payload = {
      name: rawValues.name?.trim(),
      email: rawValues.email?.trim(),
      message: rawValues.message?.trim(),
    };

    const formspreeUrl = 'https://formspree.io/f/mqekkqpl';

    this.http
      .post(formspreeUrl, payload, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
      })
      .subscribe({
        next: (response) => {
          this.isSubmitting.set(false);
          this.FormContact.reset();
          this.msg.add({
            severity: 'success',
            summary: 'Enviado correctamente',
            detail: 'Mensaje enviado correctamente',
          });
        },
        error: (error) => {
          this.isSubmitting.set(false);
          this.msg.add({
            severity: 'error',
            summary: 'Error al enviar',
            detail: 'Ha ocurrido un error al enviar el mensaje, intente de nuevo',
          });
        },
      });
  }
}
