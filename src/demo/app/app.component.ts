import {Component} from '@angular/core';
import {StructuredDataService} from "../../structured-data/structured-data.service";

@Component({
  selector: 'app-component',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(private schema: StructuredDataService) {
    this.schema.insertSchema(StructuredDataService.address({
      streetAddress: '',
      addressCountry: '',
      addressLocality: '',
      addressRegion: '',
      postalCode: ''
    }));
  }
}
