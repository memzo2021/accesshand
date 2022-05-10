import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  public createForm!: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm = this.fb.group({
      stationName: ['', Validators.required],
      lift: [true, [Validators.required]],
      escalator: [false, Validators.required],
      callTerminal: [false, Validators.required],
    });
  }
  onSubmitForm() {
    console.log(this.createForm.value);
  }
}
