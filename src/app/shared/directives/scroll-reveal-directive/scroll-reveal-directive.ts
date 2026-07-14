import { Directive, ElementRef, Renderer2, OnInit, OnDestroy, input, Component } from '@angular/core';

@Directive({
  selector: '[appScrollReveal]',
})
export class ScrollRevealDirective implements OnInit, OnDestroy {
  // permite personalizar por elemento: <div appScrollReveal="fade-up">
  animation = input<string>('fade-up', { alias: 'appScrollReveal' });
  delay = input<number>(0); // ms, para escalonar animaciones en un grid

  private observer?: IntersectionObserver;

  constructor(
    private el: ElementRef<HTMLElement>,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    const element = this.el.nativeElement;

    // estado inicial: oculto, listo para animar
    this.renderer.addClass(element, 'reveal-init');
    this.renderer.addClass(element, `reveal-${this.animation()}`);

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            this.renderer.addClass(element, 'reveal-active');
          }, this.delay());

          // se anima una sola vez y dejamos de observar
          this.observer?.unobserve(element);
        }
      },
      {
        threshold: 0.15,      // se activa cuando el 15% del elemento es visible
        rootMargin: '0px 0px -50px 0px' // dispara un poco antes de llegar al borde
      }
    );

    this.observer.observe(element);
  }

  ngOnDestroy(): void {
    // limpieza obligatoria: evita memory leaks si el componente se destruye
    this.observer?.disconnect();
  }
}
