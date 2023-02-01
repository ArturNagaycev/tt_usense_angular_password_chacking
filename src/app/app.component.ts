import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  passwordControl!: FormControl;
  strength = 'empty';

  ngOnInit() {
    this.passwordControl = new FormControl('');
    this.passwordControl?.valueChanges.subscribe((value) => {
      const hasNumbers = (/[0-9]/).test(value);
      const hasLetters = (/[a-zA-Z]/).test(value);
      const hasSymbols = (/[$-/:-?{-~!"^_`\[\]]/).test(value);

      const conditions = [hasLetters, hasNumbers, hasSymbols];
      const validConditionsNumber = conditions.filter(condition => condition).length;

      if (!value.length) {
        this.strength = 'empty';

        return;
      }

      if (value.length < 8) {
        this.strength = 'less';

        return;
      }

      if (validConditionsNumber === 1) {
        this.strength = 'easy';
      }

      if (validConditionsNumber === 2) {
        this.strength = 'medium';
      }

      if (validConditionsNumber === 3) {
        this.strength = 'strong';
      }
    });
  }
}
