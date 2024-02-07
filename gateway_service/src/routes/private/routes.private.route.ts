import { Router } from "express";
import { AuthenticationRoute, ClubRoute, EventRoute, MatchRoute, PlayerRoute } from "../../resources";

export namespace RoutesPrivateRoute {
  export const Index = Router();
  Index.use([
    AuthenticationRoute.Index,
    PlayerRoute.Index,
    ClubRoute.Index,
    MatchRoute.Index,
    EventRoute.Index
  ]);
}
