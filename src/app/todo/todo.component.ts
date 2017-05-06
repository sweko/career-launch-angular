import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'to-do',
  templateUrl: './todo.component.html',
})
export class TodoComponent{
    @Input() text : string;
    isEditMode: boolean;

    setViewMode(){
        this.isEditMode = false;
    }

    setEditMode(){
        this.isEditMode = true;
    }
}
