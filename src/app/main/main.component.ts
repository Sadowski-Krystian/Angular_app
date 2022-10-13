import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  regForm!: FormGroup;
  @Input()
  dateTime: string = ''
  @Input()
  registeryData: string = ''


  constructor(private fb:FormBuilder) { }


  ngOnInit(): void {
    this.regForm = this.fb.group({
      nazwisko: ['', [Validators.required, Validators.minLength(2)]],
      imie: ['', [Validators.required, Validators.minLength(2)]],
      telefon: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(9)]],
      data: ['', [Validators.required]],
      time: ['', [Validators.required]],

    })
  }
  onSubmit(form: FormGroup){
    console.log("FormOk: ", form.valid);
    console.log("nazwisko: ", form.value.nazwisko);
    console.log("imie: ", form.value.imie);
    console.log("telefon: ", form.value.telefon);
    console.log("data: ", form.value.data);
    console.log("czas: ", form.value.time);
    
  }

}
