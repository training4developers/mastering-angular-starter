import { Component } from "@angular/core";

@Component({
    selector: "main",
    template: "<span>{{message}}</span>",
})
export class AppComponent {

    public message: string = "Hello World!";

}
