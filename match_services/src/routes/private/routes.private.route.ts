import { Router } from "express";
import {
  AuthorizationRoute,
  PermissionRoute,
  ClubRoute,

} from "../../resources";
// import { ClubRoute } from "../../resources/club";
export namespace RoutesPrivateRoute {
  export const Index = Router();
  Index.use([
    AuthorizationRoute.Index,
    PermissionRoute.Index,
    ClubRoute.Index
  ]);
}
