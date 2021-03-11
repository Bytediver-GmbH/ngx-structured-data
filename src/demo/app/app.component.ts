import {Component} from '@angular/core';
import {StructuredDataService} from "../../structured-data/structured-data.service";
import {Person} from "../../structured-data/interfaces/thing/person";
import {FAQPage} from "../../structured-data/interfaces/thing/creative-work/web-page/faq-page";

@Component({
  selector: 'app-component',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(private schema: StructuredDataService) {
    this.schema.insertSchema({
      streetAddress: '',
      addressCountry: '',
      addressLocality: '',
      addressRegion: '',
      postalCode: ''
    });


    this.schema.insertSchema({
      mainEntity: [
        {
          name: 'Noch eine Agentur? Davon gibt’s doch schon genug!',
          acceptedAnswer: {
            text: 'Da geben wir Dir vollkommen recht! Agenturen gibt’s da draußen schon eine ganze Menge, doch keine kommt an unseren Qualitätsanspruch heran. Damit meinen wir nicht nur die Qualität am fertigen Produkt, sondern auch die Qualität im Umgang mit Dir.'
          }
        }
      ]
    } as FAQPage);

    this.schema.insertSchema({
      givenName: 'Tim',
      familyName: 'Rücker',
      jobTitle: 'Inhaber / Geschäftsführer',
      email: 'mailto:tim.ruecker@bytediver.com',
      telephone: '',
      image: {
        contentUrl: 'tim.ruecker.jpg',
        caption: 'Profilbild von Tim Rücker',
        width: 1024,
        height: 576
      },
      gender: 'Male',
      sameAs: [
        'https://www.xing.com/profile/Tim_Ruecker/cv',
        'https://github.com/Nano1237',
      ]
    } as Person);

    this.schema.insertSchema({
        name: 'Bytediver GmbH',
        logo: 'https://www.bytediver.com/assets/images/logo.svg',
        address: {
          streetAddress: 'Kopernikusstraße 14',
          postalCode: '30167',
          addressRegion: 'NI',
          addressLocality: 'Hannover',
          addressCountry: 'DE'
        },
        geo: {
          latitude: 52.388271,
          longitude: 9.726390,
        },
        url: 'https://www.bytediver.com',
        telephone: '232323'
      }
    );
  }
}
