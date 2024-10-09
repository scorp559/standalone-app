import { JsonPipe } from '@angular/common';
import { Component , ChangeDetectionStrategy, inject} from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MatCheckboxModule, JsonPipe, MatDatepickerModule,MatFormFieldModule,MatSelectModule,MatFormFieldModule ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [provideNativeDateAdapter()]
})
export class AboutComponent {
  
  // private readonly _formBuilder = inject(FormBuilder);

  // readonly toppings = this._formBuilder.group({
  //   pepperoni: true,
  //   extracheese: false,
  //   mushroom: false,
  // });

  myForm: FormGroup;

  constructor() {
    this.myForm = new FormGroup({
      inputField: new FormControl(''),
      selectField: new FormControl('one'),  // Default option
      textareaField: new FormControl(''),
    });
  }

}
