import { Component } from '@angular/core';
//This component displays the header at the top of the page

@Component({
    selector: 'header-component',
    template: `
    <div class="topnav">
        <a [routerLink]="['/']" routerLinkActive="active">Home</a>
        <a [routerLink]="['/news']">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
    </div>

    `,
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {

}