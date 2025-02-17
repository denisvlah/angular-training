import { Component, ViewEncapsulation, HostBinding } from "@angular/core";

import { Content1 } from "../../components/Content1/content1.component";
import { FormsSecondary } from "../../components/FormsSecondary/forms-secondary.component";
import { Buttons16pxIconTranspa } from "../../components/Buttons16pxIconTranspa/buttons16px-icon-transpa.component";
import { ElementTags } from "../../components/ElementTags/element-tags.component";
import { Buttons } from "../../components/Buttons/buttons.component";
import { NavigationSidebar } from "../../components/NavigationSidebar/navigation-sidebar.component";
@Component({
  selector: "profile-settings",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [
    Content1,
    FormsSecondary,
    Buttons16pxIconTranspa,
    ElementTags,
    Buttons,
    NavigationSidebar,
  ],
  templateUrl: "./profile-settings.component.html",
  styleUrls: ["./profile-settings.component.css"],
})
export class ProfileSettings {
  @HostBinding("style.display") display = "contents";

  constructor() {}
}
