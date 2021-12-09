import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

interface IContact{
  index: number;
  imagePath: string;
  name: string;
  status: string;
}
interface IMessage{
  index: number;
  viewValue: string;
  text: string;
  avatarPath: string;
}

@Component({
  selector: 'app-chatpage',
  templateUrl: './chatpage.component.html',
  styleUrls: ['./chatpage.component.css']
})
export class ChatpageComponent implements OnInit {
  @ViewChild('chatZone', {static: true})
  chatZone!: ElementRef<HTMLDivElement>;
  @ViewChild('MatInput', {static: true})
  input!: ElementRef<HTMLInputElement>;

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
  public newMessageText: string = '';

  public messages: IMessage[] = [
    {
      index: 1,
      viewValue: 'contact-message message',
      text: 'Меня зовут Кира Йошикаге',
      avatarPath: this.chosenContact.imagePath+this.chosenContact.index+'.jpg',
    },
    {
      index: 2,
      viewValue: 'self-message message',
      text: 'Мне 33 года',
      avatarPath: '../../assets/UserAvatar.jpg',
    },
    {
      index: 3,
      viewValue: 'contact-message message',
      text: 'Мой дом находится в северо-восточной части Морио, где расположены все виллы',
      avatarPath: this.chosenContact.imagePath+this.chosenContact.index+'.jpg',
    },
    {
      index: 4,
      viewValue: 'self-message message',
      text: 'Я не женат. Я работаю в универмаге Kame Yu и прихожу домой не позднее 8 вечера',
      avatarPath: '../../assets/UserAvatar.jpg',
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  public chooseContact(contact : IContact) : void {
    this.chosenContact = contact;
  }

  public send() {
    if (this.input.nativeElement.value != ''){
      this.messages.push({
        index: this.messages.length+1,
        viewValue: "self-message message",
        text: this.input.nativeElement.value,
        avatarPath: '../../assets/UserAvatar.jpg',
      });
      this.input.nativeElement.value = '';
    }
  }
}
