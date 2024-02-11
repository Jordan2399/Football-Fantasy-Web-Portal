import { Router } from "express";
import { AuthenticationRoute, AuthorizationRoute, ClubRoute, EventRoute, MatchRoute, PlayerRoute } from "../../resources";

export namespace RoutesPrivateRoute {
  export const Index = Router();
  Index.use([
    AuthenticationRoute.Index,
    AuthorizationRoute.Index,
    PlayerRoute.Index,
    ClubRoute.Index,
    MatchRoute.Index,
    EventRoute.Index
  ]);
}
