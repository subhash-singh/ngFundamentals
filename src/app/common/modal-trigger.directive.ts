import { JQ_TOKET } from './jquery.service';
import { Directive, OnInit, ElementRef, Inject, Input } from '@angular/core';

@Directive({
    selector: '[modal-trigger]'
})
export class ModalTriggerDirective implements OnInit {
    @Input('modal-trigger') modalId: string;
    private el: HTMLElement;

    constructor(ref: ElementRef , @Inject(JQ_TOKET) private $: any) {
        this.el = ref.nativeElement;
    }

    ngOnInit() {
        this.el.addEventListener('click', e => {
            this.$(`#${this.modalId}`).modal({});
        });
    }
}
