
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ISession } from '../shared';

@Component({
    selector: 'app-session-create',
    templateUrl: './create-session.component.html',
    styleUrls: ['./create-session.component.css']
})
export class CreateSessionComponent implements OnInit {

    @Output() saveNewSession = new EventEmitter();
    @Output() cancelAddSession =  new EventEmitter();
    name: FormControl;
    abstract: FormControl;
    level: FormControl;
    duration: FormControl;
    presenter: FormControl;
    newSessionForm: FormGroup;

        ngOnInit() {
            this.name = new FormControl('', Validators.required);
            this.presenter = new FormControl('', Validators.required);
            this.duration = new FormControl('', Validators.required);
            this.level = new FormControl('', Validators.required);
            this.abstract = new FormControl('', [Validators.required, Validators.maxLength(400), this.restrictedWorlds(['foo', 'bar'])]);

            this.newSessionForm =  new FormGroup({
                name : this.name,
                presenter : this.presenter,
                duration : this.duration,
                level : this.level,
                abstract : this.abstract
            });
        }

        saveSession(formValues) {
            const session: ISession = {
                id: undefined,
                name: formValues.name,
                duration: +formValues.duration,
                level: formValues.level,
                presenter: formValues.presenter,
                abstract: formValues.abstract,
                voters: []
            };
            this.saveNewSession.emit(session);
        }

        cancel() {
            this.cancelAddSession.emit();
        }

        private restrictedWorlds(words: string[]) { return (control: FormControl): {[key: string]: any } => {
            if (!words) {
                return null;
            }
            const invalidWords = words.map((w: any) => control.value.includes(w) ? w : null).filter(w => w != null);
            return invalidWords && invalidWords.length > 0 ?  { 'restrictedWords' : invalidWords.join(', ')} : null;
        };
    }
}
