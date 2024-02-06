import { Router } from "express";
import { AuthenticationRoute, FantasyRoute } from "../../resources";
import { ClubRoute } from "../../resources/matches_services/club";
export namespace RoutesPrivateRoute {
  export const Index = Router();
  Index.use([
    AuthenticationRoute.Index,
    FantasyRoute.Index,
    ClubRoute.Index
  ]);
}
