import { Component, ViewEncapsulation, HostBinding } from "@angular/core";

@Component({
  selector: "buttons16px-icon-transpa",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [],
  templateUrl: "./Buttons16pxIconTranspa.component.html",
  styleUrls: ["./Buttons16pxIconTranspa.component.css"],
})
export class Buttons16pxIconTranspa {
  @HostBinding("style.display") display = "contents";

  constructor() {}
}
