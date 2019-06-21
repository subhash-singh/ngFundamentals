import { JQ_TOKET } from './jquery.service';
import { Component, Input, ViewChild, ElementRef, Inject } from '@angular/core';

@Component({
selector: 'app-simple-modal',
template: ` <div id="{{elementId}}" #modalContainer class="modal fade" tabIndex="-1" >
<div class="modal-dialog">
    <div class="modal-content">
        <div class="modal-header">
            <button class="close" data-dismiss="modal" ><span>&times;</span></button>
            <h4 class="modal-title" >{{title}}</h4>
        </div>
        <div class="modal-body" (click)="closeModal()">
            <ng-content></ng-content>
        </div>
    </div>
</div>
</div>`,
styles: ['.modal-body { max-height: 450px; overflow-y: scroll; }']
})
export class SimpleModalComponent {

    @Input() title: string;
    @Input() elementId: string;
    @ViewChild('modalContainer') containerEl: ElementRef;
    @Input() closeOnBodyClick: string;

    constructor(@Inject(JQ_TOKET) private $: any) {
    }
    closeModal() {
        if (this.closeOnBodyClick.toLocaleLowerCase() === 'true' ) {
            this.$(this.containerEl.nativeElement).modal('hide');
        }

    }
}
