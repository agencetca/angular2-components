@import {Component, EventEmitter} from "angular2/core"

@Component({
    selector : 'favorite',
    template : `<div><i class="glyphicon fa-3x" 
                        [class.glyphicon-star-empty]="active === false"
                        [class.glyphicon-star]="active === true"
                        (click)="toggle()">
                        (click)="change()">
                        </i></div>`
})

export class FavoriteComponent {

    active = false;

    toggle() {
        this.active = !this.active;
    }

    change = new EventEmitter();
}
