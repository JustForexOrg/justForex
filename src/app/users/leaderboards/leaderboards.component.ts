import { Component, ViewChild } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { MessageService } from '../chat/message.service';
import { Message } from '../chat/message/message';
import { UserService } from '../authentication/services/user.service';
import { Project } from '../../projectsFolder/myproject/project';
import { FormGroup, FormBuilder, Validator} from '@angular/forms'

declare var $:any;

@Component({
  selector: 'app-leaderboards',
  templateUrl: './leaderboards.component.html',
  styleUrls: ['./leaderboards.component.css', '../../../../node_modules/font-awesome/css/font-awesome.min.css']
})

export class LeaderboardsComponent {
   public data: Project[];
   public filterQuery = "";
   public rowsOnPage = 10;
   public sortBy = "position";
   public sortOrder = "asc";

   isSent: boolean = false;
   risk;

   recipient_id: string;
   proposed_split:number = 50;
   proposed_amount: number;

   constructor(private http: Http, private messageService: MessageService, private userService: UserService) {
   }

   ngOnInit(): void {
       this.http.get("/api/tasks/")
           .subscribe((data)=> {
               setTimeout(()=> {
                   this.data = data.json();
               }, 1000);
           });
   }

   public toInt(num: string) {
       return +num;
   }

   public createRange(number) {
     var items: number[] = [];
     for (var i = 1; i <= number; i++) {
       items.push(i);
     }
     return items;
   }

  //  public sortByWordLength = (a: any) => {
  //      return a.address.city.length;
  //  }
   //
  //  public sortByCity = (a: any) => {
  //      return a.address.city;
  //  }
   //
  //  public sortByRisk = (a: any) => {
  //      return this.makeRisk(this.abs(a.address.geo.lat));
  //  }
   //
  //  public sortBySplit = (a: any) => {
  //      return this.makeSplit(this.abs(a.address.geo.lng));
  //  }
   //
  //  public sortByTotal = (a: any) => {
  //      return Number(this.makeTotal(this.abs(a.address.geo.lng), this.makeRisk(this.abs(a.address.geo.lat))));
  //  }

  public sortByCountry = (a: any) => {
      return a.country;
  }

  public sortBySplit = (a: any) => {
      return Number(a.split);
  }

  public sortByReturns = (a: any) => {
      return Number(a.returns);
  }

   public sortByRisk = (a: any) => {
       return Number(a.risk);
   }

  //  public makeSplit(num: number) {
  //      var n1 = this.roundToTwo(num %= 100);
  //      var n2 = this.roundToTwo(100 - num);
  //      return String(n1) + " : " + String(n2);
  //  }
   //
  //  public makeRisk(n: number) {
  //      var NewMax = 10;
  //      var NewMin = 1;
  //      var OldMax = 90;
  //      var OldMin = -90;
  //      this.risk = this.roundToTwo((((n - OldMin) * (NewMax - NewMin)) / (OldMax - OldMin)) + NewMin);
  //      return this.risk;
  //  }
   //
  //  public makeTotal(splitFor: number, risk: number) {
  //      splitFor %= 100;
  //      return this.roundToTwo((risk*1000)/(100-splitFor) * Math.pow(splitFor, risk/10));
  //  }

   public saveMessage(id) {
     if(!this.isSent) {
       var m: Message = {
         sender_id: JSON.parse(JSON.parse(localStorage.getItem('currentUser'))._body)._id,
         recipient_id: id,
         proposed_split: this.proposed_split,
         proposed_amount: this.proposed_amount
       }
       this.messageService.saveMessage(m);
       this.isSent = true;
     }
   }

   public resetSentData() {
     this.isSent = false;
   }

   public abs(num: number) {
       return Math.abs(num);
   }

   public makeSplit(num: number) {
       var n1 = this.roundToTwo(num %= 100);
       var n2 = this.roundToTwo(100 - num);
       return String(n1) + " : " + String(n2);
   }

   public makeRisk(n: number) {
       var NewMax = 10;
       var NewMin = 1;
       var OldMax = 90;
       var OldMin = -90;
       this.risk = this.roundToTwo((((n - OldMin) * (NewMax - NewMin)) / (OldMax - OldMin)) + NewMin);
       return this.risk;
   }

   public makeTotal(splitFor: number, risk: number) {
       splitFor %= 100;
       return this.roundToTwo((risk*1000)/(100-splitFor) * Math.pow(splitFor, risk/10));
   }

   public roundToTwo(n: number) {
       return n.toFixed(2);
   }


   powers = ['Really Smart', 'Super Flexible', 'Weather Changer'];

  //  hero = new Hero(18, 'Dr. WhatIsHisName', this.powers[0], 'Dr. What');

   submitted = false;

   onSubmit() {
     this.submitted = true;
    //  this.hero = this.heroForm.value;
   }

   // Reset the form with a new hero AND restore 'pristine' class state
   // by toggling 'active' flag which causes the form
   // to be removed/re-added in a tick via NgIf
   // TODO: Workaround until NgForm has a reset method (#6822)
   active = true;
   addHero() {
    //  this.hero = new Hero(42, '', '');
     this.buildForm();

     this.active = false;
     setTimeout(() => this.active = true, 0);
   }

  //  heroForm: FormGroup;

   buildForm(): void {
    //  this.heroForm = this.fb.group({
    //    'name': [this.hero.name, [
    //        Validators.required,
    //        Validators.minLength(4),
    //        Validators.maxLength(24),
    //        forbiddenNameValidator(/bob/i)
      //    ]
      //  ],
      //  'alterEgo': [this.hero.alterEgo],
      //  'power':    [this.hero.power, Validators.required]
    //  });


    //  this.heroForm.valueChanges
      //  .subscribe(data => this.onValueChanged(data));

     this.onValueChanged(); // (re)set validation messages now
   }


   onValueChanged(data?: any) {
    // //  if (!this.heroForm) { return; }
    // //  const form = this.heroForm;
    //
    //  for (const field in this.formErrors) {
    //    // clear previous error message (if any)
    //    this.formErrors[field] = '';
    //    const control = form.get(field);
    //
    //    if (control && control.dirty && !control.valid) {
    //      const messages = this.validationMessages[field];
    //      for (const key in control.errors) {
    //        this.formErrors[field] += messages[key] + ' ';
    //      }
    //    }
    //  }
   }

   formErrors = {
     'name': '',
     'power': ''
   };

   validationMessages = {
     'name': {
       'required':      'Name is required.',
       'minlength':     'Name must be at least 4 characters long.',
       'maxlength':     'Name cannot be more than 24 characters long.',
       'forbiddenName': 'Someone named "Bob" cannot be a hero.'
     },
     'power': {
       'required': 'Power is required.'
     }
   };
}
