import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({
	selector: '[customLabel]'
})
export class CustomLabelDirective implements OnInit {

	private htmlElement?: ElementRef<HTMLElement>;
	private _color: string = 'red';
	private _errors?: ValidationErrors | null | undefined;

	@Input () set color (value: string) {
		this._color = value;
		this.setStyle ();
	};

	@Input () set errors (value: ValidationErrors | null | undefined) {
		this._errors = value;
		this.setErrorMessage ();
	};

	constructor (private el: ElementRef<HTMLElement>) {
		// console.log ('constructor de la directiva');
		// console.log (el);
		this.htmlElement = el;
		// this.htmlElement.nativeElement.innerHTML = 'Hola Mundo';
	}

	ngOnInit (): void {
		// console.log ('Directiva - NgOnInit');
		this.setStyle ();
	}

	setStyle (): void {
		if (!this.htmlElement) return;
		this.htmlElement.nativeElement.style.color = this._color;
	}

	setErrorMessage (): string | undefined {
		if (!this.htmlElement) return;
		if (!this._errors) return this.htmlElement.nativeElement.innerHTML = '';

		const errors = Object.keys (this._errors);
		// console.log (errors);

		if (errors.includes ('required')) return this.htmlElement.nativeElement.innerHTML = 'El campo es requerido.';
		if (errors.includes ('minlength')) {
			const min = this._errors['minlength']['requiredLength'];
			const current = this._errors['minlength']['actualLength'];
			return this.htmlElement.nativeElement.innerHTML = `Mínimo ${ current }/${ min } carectéres.`;
		}
		if (errors.includes ('email')) return this.htmlElement.nativeElement.innerHTML = 'No tiene formato de correo.';
		return;
	}
}