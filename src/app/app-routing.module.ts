import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MyProfile } from "./pages/MyProfile/my-profile.component";
import { Chats } from "./pages/Chats/chats.component";
import { Search } from "./pages/Search/search.component";
import { ProfileSettings } from "./pages/ProfileSettings/profile-settings.component";
const routes: Routes = [
  {
    path: "",
    component: MyProfile,
  },
  {
    path: "chats",
    component: Chats,
  },
  {
    path: "search",
    component: Search,
  },
  {
    path: "profile-settings",
    component: ProfileSettings,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
