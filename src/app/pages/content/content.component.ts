import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

	photoCover:string = "https://tse3.mm.bing.net/th?id=OIP.XXhe5PTq0bKOvPILTR-frAHaKl&pid=Api&P=0&h=180"
	contentTitle:string = "MINHA NOTTICIA"
	contentDescriptio:string = "bla bla bla bla"

	constructor(){}
	ngOnInit(): void {
	}
}

