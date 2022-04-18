import { Component, OnInit } from '@angular/core';
import { AlertService } from '../services/index';


@Component({
    selector: 'app-alert',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.css']
})

export class AlertComponent {
    message: any;

    constructor(private alertService: AlertService) { }

                                                  /**added 'any' to message below */
    ngOnInit() {
        this.alertService.getMessage().subscribe((message: any) => { this.message = message; });
    }
}