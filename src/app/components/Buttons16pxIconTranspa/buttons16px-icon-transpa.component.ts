import { Component, ViewEncapsulation, HostBinding } from "@angular/core";

@Component({
  selector: "buttons16px-icon-transpa",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [],
  templateUrl: "./buttons16px-icon-transpa.component.html",
  styleUrls: ["./buttons16px-icon-transpa.component.css"],
})
export class Buttons16pxIconTranspa {
  @HostBinding("style.display") display = "contents";

  constructor() {}
}
