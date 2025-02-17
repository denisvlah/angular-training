import { Component, ViewEncapsulation, HostBinding } from "@angular/core";

import { PostContainer } from "../../components/PostContainer/post-container.component";
import { ElementTags00D066Badge } from "../../components/ElementTags00D066Badge/element-tags00-d066-badge.component";
import { Buttons12pxIconTranspa } from "../../components/Buttons12pxIconTranspa/buttons12px-icon-transpa.component";
import { NavigationSidebar } from "../../components/NavigationSidebar/navigation-sidebar.component";
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
  templateUrl: "./my-profile.component.html",
  styleUrls: ["./my-profile.component.css"],
})
export class MyProfile {
  @HostBinding("style.display") display = "contents";

  constructor() {}
}
