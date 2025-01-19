import { Component, ViewEncapsulation, HostBinding } from "@angular/core";

import { PostContainer } from "../../components/PostContainer/PostContainer.component";
import { ElementTags00D066Badge } from "../../components/ElementTags00D066Badge/ElementTags00D066Badge.component";
import { Buttons12pxIconTranspa } from "../../components/Buttons12pxIconTranspa/Buttons12pxIconTranspa.component";
import { NavigationSidebar } from "../../components/NavigationSidebar/NavigationSidebar.component";
@Component({
  selector: "my-profile",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [
    PostContainer,
    ElementTags00D066Badge,
    Buttons12pxIconTranspa,
    NavigationSidebar,
  ],
  templateUrl: "./MyProfile.component.html",
  styleUrls: ["./MyProfile.component.css"],
})
export class MyProfile {
  @HostBinding("style.display") display = "contents";

  constructor() {}
}
