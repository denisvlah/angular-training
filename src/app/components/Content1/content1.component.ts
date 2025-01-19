import { Component, ViewEncapsulation, HostBinding } from "@angular/core";

@Component({
  selector: "content1",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [],
  templateUrl: "./Content1.component.html",
  styleUrls: ["./Content1.component.css"],
})
export class Content1 {
  @HostBinding("style.display") display = "contents";

  constructor() {}
}
