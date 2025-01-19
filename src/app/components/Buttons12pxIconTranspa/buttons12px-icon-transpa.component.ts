import { Component, ViewEncapsulation, HostBinding } from "@angular/core";

@Component({
  selector: "buttons12px-icon-transpa",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [],
  templateUrl: "./Buttons12pxIconTranspa.component.html",
  styleUrls: ["./Buttons12pxIconTranspa.component.css"],
})
export class Buttons12pxIconTranspa {
  @HostBinding("style.display") display = "contents";

  constructor() {}
}
