import { Component, ViewEncapsulation, HostBinding } from "@angular/core";

import { Send } from "../Send/send.component";
import { Post } from "../Post/post.component";
@Component({
  selector: "post-container",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [Send, Post],
  templateUrl: "./post-container.component.html",
  styleUrls: ["./post-container.component.css"],
})
export class PostContainer {
  @HostBinding("style.display") display = "contents";

  constructor() {}

  onAccordionHeaderClick(event: Event) {
    const element = event.target as HTMLElement;

    const accItem: HTMLElement = element.closest("[data-acc-item]") || element;
    const accContent = accItem.querySelector(
      "[data-acc-content]"
    ) as HTMLElement;
    const isOpen = accItem.hasAttribute("data-acc-open");
    const nextOuterSibling =
      accItem?.nextElementSibling ||
      (accItem?.parentElement?.nextElementSibling as HTMLElement);
    const prevOuterSibling =
      accItem?.previousElementSibling ||
      (accItem?.parentElement?.previousElementSibling as HTMLElement);
    const siblingContainerAccItem = accItem?.hasAttribute("data-acc-original")
      ? accItem?.nextElementSibling ||
        nextOuterSibling?.querySelector("[data-acc-item]") ||
        nextOuterSibling
      : accItem?.previousElementSibling ||
        prevOuterSibling?.querySelector("[data-acc-item]") ||
        prevOuterSibling;
    const siblingAccItem =
      (siblingContainerAccItem?.querySelector(
        "[data-acc-item]"
      ) as HTMLElement) || siblingContainerAccItem;

    if (!siblingAccItem) return;
    const originalDisplay = "flex";
    const siblingDisplay = "flex";

    const accordion__open = "accordion__open";
    const accordion__close = "accordion__close";

    if (isOpen) {
      accContent?.classList.remove(accordion__open);
      accContent?.classList.add(accordion__close);

      setTimeout(() => {
        if (accItem) {
          accItem.style.display = "none";
          siblingAccItem.style.display = siblingDisplay;
        }
      }, 100);
    } else {
      if (accItem) {
        accItem.style.display = "none";
        siblingAccItem.style.display = originalDisplay;
      }
      const siblingAccContent = siblingAccItem?.querySelector(
        "[data-acc-content]"
      ) as HTMLElement;
      setTimeout(() => {
        siblingAccContent?.classList.remove(accordion__close);
        siblingAccContent?.classList.add(accordion__open);
      }, 1);
    }
  }
}
