import { Component, ViewEncapsulation, HostBinding } from "@angular/core";

import { Content1 } from "../../components/Content1/Content1.component";
import { FormsSecondary } from "../../components/FormsSecondary/FormsSecondary.component";
import { Buttons16pxIconTranspa } from "../../components/Buttons16pxIconTranspa/Buttons16pxIconTranspa.component";
import { ElementTags } from "../../components/ElementTags/ElementTags.component";
import { Buttons } from "../../components/Buttons/Buttons.component";
import { NavigationSidebar } from "../../components/NavigationSidebar/NavigationSidebar.component";
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
  templateUrl: "./ProfileSettings.component.html",
  styleUrls: ["./ProfileSettings.component.css"],
})
export class ProfileSettings {
  @HostBinding("style.display") display = "contents";

  constructor() {}
}
