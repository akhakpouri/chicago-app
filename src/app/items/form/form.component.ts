import { Item } from './../../models/item.model';
import { getSupportedInputTypes } from '@angular/cdk/platform';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'chicago-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input() item: Observable<Item> | undefined;
  @Output() onSaveForm = new EventEmitter();

  submitted = false;
  isNewForm: boolean = true;
  itemForm = this.fb.group({
    id: [0],
    name: ['', Validators.required],
    balance: ['', Validators.required],
    selectedType: [''],
    types: ['']
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    if (this.item != undefined) {
      this.item.subscribe((model: Item) => {
        this.itemForm.patchValue({
          model,
          id: model.id,
          name: model.name,
          balance: model.balance
        });
        this.isNewForm = model.id === 0;
      });
    }
  }

  getTypes() {
    return [
      { id: 1, name: 'Asset' },
      { id: 2, name: 'Liability' }
    ]
  }

  onSubmit(): void {
    this.submitted = true;

  }

}
