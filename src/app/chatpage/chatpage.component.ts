import { Component, OnInit } from '@angular/core';

interface IContact{
  index: number;
  imagePath: string;
  name: string;
  status: string;
}

@Component({
  selector: 'app-chatpage',
  templateUrl: './chatpage.component.html',
  styleUrls: ['./chatpage.component.css']
})
export class ChatpageComponent implements OnInit {
  public contacts: IContact[] = [
    {
      index: 1,
      imagePath: `../../assets/User`,
      name: `Kakyoin Noriaki`,
      status: `Online`,
    },
    {
      index: 2,
      imagePath: `../../assets/User`,
      name: `Joseph Joestar`,
      status: `Online`,
    },
    {
      index: 3,
      imagePath: `../../assets/User`,
      name: `Giorno Giovanna`,
      status: `Online`,
    },
    {
      index: 4,
      imagePath: `../../assets/User`,
      name: `Bruno Bucciarati`,
      status: `Online`,
    },
    {
      index: 5,
      imagePath: `../../assets/User`,
      name: `SpeeeeeeeeeeeeeeeeedwaGOOON`,
      status: `Online`,
    },
    {
      index: 6,
      imagePath: `../../assets/User`,
      name: `DЫO`,
      status: `Online`,
    },
    {
      index: 7,
      imagePath: `../../assets/User`,
      name: `Higashikata Josuke`,
      status: `Online`,
    },
    {
      index: 8,
      imagePath: `../../assets/User`,
      name: `Nijimura Okuyasu`,
      status: `Online`,
    },
  ]

  public chosenContact: IContact = this.contacts[0];
  constructor() { }

  ngOnInit(): void {
  }

  public chooseContact(contact : IContact) : void {
    this.chosenContact = contact;
  }
}
