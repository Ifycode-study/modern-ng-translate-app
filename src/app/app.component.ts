import { Component } from '@angular/core';
import { TranslateService } from "./translate.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-1-translate-app';

  text!: string;
  translatedText!: string;
  value: any;

  constructor(private translateService: TranslateService) {}

  fromEvent(event: Event): string {
    this.value = (event.target as HTMLInputElement).value;
    return this.value;
  }

  submit() {
    // console.log works
    console.log(this.value, this.text);

    // The Translate API given to use returns 403 forbidden error
    this.translateService.translate(this.text).subscribe((result: string) => {
      this.translatedText = result;
    });
  }
}
