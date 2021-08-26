import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { Disease } from '@app/models/disease';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

export interface Person {
  name: string;
  age: Number;
}

@Component({
  selector: 'app-newdisease',
  templateUrl: './newdisease.component.html',
  styleUrls: ['./newdisease.component.css']
})

export class NewdiseaseComponent implements OnInit {
  diseases: Disease[] = [
    {
        "diseaseLocation" : "Chest",
        "diseaseName" : "nenju sali",
        "nattuMarundhu" : [ 
            "coconut oil and karporam"
        ],
        "solutions" : [ 
            "completely burn karporam, mix it with coconut oil and apply over chest"
        ],
        "diagnosis" : [ 
            "coughing and yellow discharge from mouth", 
            "breathing problem"
        ],
        "causes" : [ 
            "person body is of kabham type"
        ]
    },
    {
        "diseaseLocation" : "whole body",
        "diseaseName" : "udal ushnam",
        "nattuMarundhu" : [ 
            "coconut oil", 
            "paasi parupu", 
            "vendhiyam vidhai", 
            "vendhiyam  keerai", 
            "vendakai", 
            "vilakku ennai", 
            "kalyana pusunikai"
        ],
        "solutions" : [ 
            "apply soaked and grinded vendhiyam vidhai all over head and take bath after 45 min", 
            "apply coconut oil on head and stomach early morning", 
            "apply vilakku ennai on head and stomach over night before sleep", 
            "avoid eating chilli instead use pepper and few drops of ghee", 
            "wear cotton cloth in hot climate", 
            "take normal water bath"
        ],
        "diagnosis" : [ 
            "body rashes, rashes can be pink or red", 
            "bllood from nose, anus, pimples"
        ],
        "causes" : [ 
            "eating too much masala items", 
            "body type is pitta", 
            "sleeping on bed, wearing tight clothes"
        ]
    }
  ]


  names: Person[] = [{name: 'kar', age: 22}, {name: 'poo', age: 21}, {name: 'smi', age: 16}];

  diseaseForm: FormGroup;
  diseaseControlLocation: FormControl = new FormControl();
  diseaseControlName: FormControl = new FormControl();
 
  constructor(private fb: FormBuilder) { 
    this.diseaseForm = this.fb.group ({
      diseaseControlLocation: '',
      diseaseControlName: ''
    })
  }
 
  //filteredOptions: Observable<Disease[] | null | undefined> [] = [];
  filteredOptions: Observable<Disease[]> | undefined;
  filterednames: Observable<Person[]> | undefined;
  ngOnInit(): void {

   /*  this.ManageNameControl(0 , 'location', this.diseaseControlLocation);
    this.ManageNameControl(1, 'names', this.diseaseControlName);
 */
    this.filteredOptions = this.diseaseForm.get('diseaseControlLocation')!.valueChanges.pipe(
      startWith(''),
      map(value => typeof value === 'string' ? value : value.diseaseLocation),
      map(dieaseLoc => dieaseLoc ? this._filter(dieaseLoc) : this.diseases.slice())
    ); 


    this.filterednames = this.diseaseControlName.valueChanges.pipe(
      startWith(''),
      map(value => typeof value === 'string' ? value : value.name),
      map(name => name ? this._filter1(name) : this.names.slice())
    ); 
  }

  private _filter(diseaseLocation: string): Disease[] {
     console.log("called");
    const filterValue = diseaseLocation.toLowerCase();
    return this.diseases.filter(option => option.diseaseLocation.toLowerCase().includes(filterValue));
  }

  private _filter1(name: string): Person[] {
    const filterValue = name.toLowerCase();
    return this.names.filter(option => option.name.toLowerCase().includes(filterValue));
  }

  displayFn(disease: Disease): string {
    return disease && disease.diseaseLocation ? disease.diseaseLocation : '';
  }

  displayFn1(name: Person): string {
    return name && name.name ? name.name : '';
  }

  onSubmit() {
    console.log(this.diseaseForm.value);
  }

 /*  ManageNameControl(index: number, param:string, formContolvar: FormControl) {
    var arrayControl = this.diseaseForm.get('items') as FormArray;
  
    this.filteredOptions[index] = formContolvar.get('name')!.valueChanges
    .pipe(
      startWith<string | Disease>(''),
      map((value:any) => typeof value === 'string' ? value : value[param]),
      map(name => name ? this._filter(name) : this.diseases.slice())
    );  
    

  } */
}
