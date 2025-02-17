import { Component, ViewEncapsulation, HostBinding } from "@angular/core";

@Component({
  selector: "buttons12px-icon-transpa",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [],
  templateUrl: "./buttons12px-icon-transpa.component.html",
  styleUrls: ["./buttons12px-icon-transpa.component.css"],
})
export class Buttons12pxIconTranspa {
  @HostBinding("style.display") display = "contents";

  constructor() {}
}
