import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {MatSort, Sort} from "@angular/material/sort";

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
  {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
  {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
  {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
];

interface ICustomer {
  index: number;
  image: string;
  name: string;
  firstName: string;
  lastName: string;
  street: string;
  zipcode: string;
  city: string;
  phone: string;
}
const Customers: ICustomer[] = [
  {
    index: 1,
    image: "../../assets/UserAvatar.jpg",
    name: "Jotaro Kujo",
    firstName: "Jotaro",
    lastName: "Kujo",
    street: "Somwhere in Japan st.",
    zipcode: "123456",
    city: "Some Japanese one",
    phone: "none",
  },
  {
    index: 2,
    image: "../../assets/User1.jpg",
    name: "Kakyoin Noriaki",
    firstName: "Kakyoin",
    lastName: "Noriaki",
    street: "Somwhere in Japan st.",
    zipcode: "123456",
    city: "Some Japanese one",
    phone: "none",
  },
  {
    index: 3,
    image: "../../assets/User2.jpg",
    name: "Joseph Joestar",
    firstName: "Joseph",
    lastName: "Joestar",
    street: "Somwhere in USA",
    zipcode: "654321",
    city: "Some American one",
    phone: "none",
  },
  {
    index: 4,
    image: "../../assets/User3.jpg",
    name: "Giorno Giovanna",
    firstName: "Giovani",
    lastName: "Giorgio",
    street: "Somwhere in Neapolis st.",
    zipcode: "456123",
    city: "Neapolis",
    phone: "none",
  },
  {
    index: 5,
    image: "../../assets/User4.jpg",
    name: "Bruno Bucciarati",
    firstName: "Bruno",
    lastName: "Bucciarati",
    street: "Somwhere in Neapolis st.",
    zipcode: "456123",
    city: "Neapolis",
    phone: "none",
  },
  {
    index: 6,
    image: "../../assets/User5.jpg",
    name: "Spedwagon",
    firstName: "Speeeeeed",
    lastName: "WagOOOOn",
    street: "Somwhere in London st.",
    zipcode: "345612",
    city: "London",
    phone: "none",
  },
  {
    index: 7,
    image: "../../assets/User6.jpg",
    name: "DIO Brando",
    firstName: "DЫO",
    lastName: "Brando",
    street: "Somwhere in London st.",
    zipcode: "345612",
    city: "London",
    phone: "none",
  },
  {
    index: 8,
    image: "../../assets/User7.jpg",
    name: "Higashikata Josuke",
    firstName: "Higashikata",
    lastName: "Josuke",
    street: "Somwhere in Morio st.",
    zipcode: "654321",
    city: "Morio",
    phone: "none",
  },
  {
    index: 9,
    image: "../../assets/User8.jpg",
    name: "Nijimura Okuyasu",
    firstName: "Nijimura",
    lastName: "Okuyasu",
    street: "Somwhere in Morio st.",
    zipcode: "654321",
    city: "Morio",
    phone: "none",
  },
  {
    index: 10,
    image: "../../assets/User9.jpg",
    name: "Hirose Koichi",
    firstName: "Hirose",
    lastName: "Koichi",
    street: "Somwhere in Morio st.",
    zipcode: "654321",
    city: "Morio",
    phone: "none",
  },
  {
    index: 11,
    image: "../../assets/User10.jpg",
    name: "Caesar Zeppeli",
    firstName: "Caesar",
    lastName: "Zeppeli",
    street: "Somwhere in Rome st.",
    zipcode: "321654",
    city: "Rome",
    phone: "none",
  },
  {
    index: 12,
    image: "../../assets/User11.jpg",
    name: "Jolyne Kujo",
    firstName: "Jolyne",
    lastName: "Kujo",
    street: "Somwhere in Florida st.",
    zipcode: "654321",
    city: "Green Dolphin Prison",
    phone: "none",
  },
  {
    index: 13,
    image: "../../assets/User12.jpg",
    name: "Enrico Pucci",
    firstName: "Enrico",
    lastName: "Pucci",
    street: "Somwhere in Florida st.",
    zipcode: "654321",
    city: "Green Dolphin Prison Chapel",
    phone: "none",
  },
  {
    index: 14,
    image: "../../assets/User13.jpg",
    name: "Leone Abbacchio",
    firstName: "Leone",
    lastName: "Abbacchio",
    street: "Somwhere in Neapolis st.",
    zipcode: "654321",
    city: "Neapolis",
    phone: "none",
  },
  {
    index: 15,
    image: "../../assets/User14.jpg",
    name: "Rudolf von Stroheim",
    firstName: "Rudolf",
    lastName: "Stroheim",
    street: "Somwhere in Germany st.",
    zipcode: "654321",
    city: "Zurick",
    phone: "none",
  },
]

@Component({
  selector: 'app-all-in-one-table',
  templateUrl: './all-in-one-table.component.html',
  styleUrls: ['./all-in-one-table.component.css']
})
export class AllInOneTableComponent implements AfterViewInit {
  public displayedColumns: string[] = ['image', 'name', 'firstname', 'lastname', 'street', 'zipcode', 'city', 'phone'];
  public dataSource = new MatTableDataSource<ICustomer>(Customers);

  @ViewChild('MatPaginator') paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _liveAnnouncer: LiveAnnouncer) {

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}
