import { Component, signal, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    @if (isSuccess()) {
      <div
        role="status"
        aria-live="polite"
        class="p-6 rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-main flex flex-col items-center text-center gap-3 animate-fade-in"
      >
        <div class="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center">
          <i class="pi pi-check text-xl font-bold"></i>
        </div>
        <h3 class="text-lg font-bold text-main">¡Mensaje enviado con éxito!</h3>
        <p class="text-sm text-muted max-w-md">
          Gracias por escribir, Juan David. He recibido tu mensaje y me pondré en contacto contigo lo más pronto posible.
        </p>
        <button
          type="button"
          (click)="onResetForm()"
          class="mt-2 text-xs font-semibold text-accent hover:underline focus:outline-none"
        >
          Enviar otro mensaje
        </button>
      </div>
    } @else {
      <form
        [formGroup]="contactForm"
        (ngSubmit)="onSubmit()"
        novalidate
        class="space-y-4"
        name="contact"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <!-- Campo oculto para Netlify -->
        <input type="hidden" name="form-name" value="contact" />
        <p class="hidden">
          <label>No llenes esto si eres humano: <input name="bot-field" /></label>
        </p>

        <!-- Alerta de error si falla el envío -->
        @if (errorMessage()) {
          <div
            role="alert"
            class="p-3.5 rounded-lg border border-red-500/30 bg-red-500/10 text-red-600 dark:text-red-400 text-xs flex items-center gap-2"
          >
            <i class="pi pi-exclamation-triangle text-sm shrink-0"></i>
            <span>{{ errorMessage() }}</span>
          </div>
        }

        <!-- Campo Nombre -->
        <div>
          <label
            for="contact-name"
            class="block text-xs font-semibold uppercase tracking-wider text-muted mb-1.5"
          >
            Nombre completo <span class="text-red-500">*</span>
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            formControlName="name"
            placeholder="Tu nombre o empresa"
            class="w-full px-4 py-2.5 rounded-lg border border-line bg-surface text-main text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
            [class.border-red-500]="isFieldInvalid('name')"
            aria-describedby="contact-name-error"
            [attr.aria-invalid]="isFieldInvalid('name')"
          />
          @if (isFieldInvalid('name')) {
            <p id="contact-name-error" class="mt-1 text-xs text-red-500 flex items-center gap-1">
              <i class="pi pi-exclamation-circle text-[10px]"></i>
              <span>Por favor ingresa tu nombre (mínimo 2 letras).</span>
            </p>
          }
        </div>

        <!-- Campo Correo -->
        <div>
          <label
            for="contact-email"
            class="block text-xs font-semibold uppercase tracking-wider text-muted mb-1.5"
          >
            Correo electrónico <span class="text-red-500">*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            formControlName="email"
            placeholder="ejemplo@correo.com"
            class="w-full px-4 py-2.5 rounded-lg border border-line bg-surface text-main text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
            [class.border-red-500]="isFieldInvalid('email')"
            aria-describedby="contact-email-error"
            [attr.aria-invalid]="isFieldInvalid('email')"
          />
          @if (isFieldInvalid('email')) {
            <p id="contact-email-error" class="mt-1 text-xs text-red-500 flex items-center gap-1">
              <i class="pi pi-exclamation-circle text-[10px]"></i>
              <span>Por favor ingresa un correo electrónico válido.</span>
            </p>
          }
        </div>

        <!-- Campo Mensaje -->
        <div>
          <label
            for="contact-message"
            class="block text-xs font-semibold uppercase tracking-wider text-muted mb-1.5"
          >
            Mensaje <span class="text-red-500">*</span>
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows="4"
            formControlName="message"
            placeholder="¿En qué puedo colaborar contigo o qué requerimiento tienes?"
            class="w-full px-4 py-2.5 rounded-lg border border-line bg-surface text-main text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-y"
            [class.border-red-500]="isFieldInvalid('message')"
            aria-describedby="contact-message-error"
            [attr.aria-invalid]="isFieldInvalid('message')"
          ></textarea>
          @if (isFieldInvalid('message')) {
            <p id="contact-message-error" class="mt-1 text-xs text-red-500 flex items-center gap-1">
              <i class="pi pi-exclamation-circle text-[10px]"></i>
              <span>El mensaje debe tener al menos 10 caracteres.</span>
            </p>
          }
        </div>

        <!-- Botón de Envío -->
        <button
          type="submit"
          [disabled]="isSubmitting()"
          class="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-accent text-on-accent font-semibold shadow-sm hover:opacity-95 active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed transition-all min-h-[44px]"
        >
          @if (isSubmitting()) {
            <i class="pi pi-spin pi-spinner text-sm"></i>
            <span>Enviando mensaje...</span>
          } @else {
            <i class="pi pi-send text-sm"></i>
            <span>Enviar mensaje</span>
          }
        </button>
      </form>
    }
  `,
})
export class ContactFormComponent {
  private readonly fb = inject(FormBuilder);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly isBrowser = isPlatformBrowser(this.platformId);

  public readonly isSubmitting = signal<boolean>(false);
  public readonly isSuccess = signal<boolean>(false);
  public readonly errorMessage = signal<string | null>(null);

  public readonly contactForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  public isFieldInvalid(field: 'name' | 'email' | 'message'): boolean {
    const control = this.contactForm.get(field);
    return !!(control && control.invalid && (control.dirty || control.touched));
  }

  public async onSubmit(): Promise<void> {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    if (!this.isBrowser) return;

    this.isSubmitting.set(true);
    this.errorMessage.set(null);

    const formValue = this.contactForm.value;

    try {
      // 1. Intento principal con Netlify Forms
      const body = new URLSearchParams({
        'form-name': 'contact',
        name: formValue.name || '',
        email: formValue.email || '',
        message: formValue.message || '',
      });

      const netlifyResponse = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      });

      if (netlifyResponse.ok) {
        this.isSuccess.set(true);
        this.contactForm.reset();
        return;
      }

      // 2. Si Netlify responde 404 (porque el bot aún no procesó el formulario en el drop),
      // enviamos a través de tu endpoint de Formspree para asegurar que el mensaje llegue a tu correo sin fallar
      const formspreeResponse = await fetch('https://formspree.io/f/mqekkqpl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formValue.name,
          email: formValue.email,
          message: formValue.message,
        }),
      });

      if (formspreeResponse.ok) {
        this.isSuccess.set(true);
        this.contactForm.reset();
      } else {
        throw new Error('No se pudo enviar por ninguno de los canales');
      }
    } catch (err) {
      console.error('Error al procesar el mensaje:', err);
      this.errorMessage.set(
        'Ocurrió un problema de conexión al enviar el mensaje. Por favor escríbeme directamente a juandavidcabral71@gmail.com'
      );
    } finally {
      this.isSubmitting.set(false);
    }
  }

  public onResetForm(): void {
    this.isSuccess.set(false);
    this.errorMessage.set(null);
    this.contactForm.reset();
  }
}
