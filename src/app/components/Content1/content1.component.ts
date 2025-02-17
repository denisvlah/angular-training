import { Component, ViewEncapsulation, HostBinding } from "@angular/core";

@Component({
  selector: "content1",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [],
  templateUrl: "./content1.component.html",
  styleUrls: ["./content1.component.css"],
})
export class Content1 {
  @HostBinding("style.display") display = "contents";

  constructor() {}
}
