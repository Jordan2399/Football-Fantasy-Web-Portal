import { Router } from "express";
import { AuthenticationRoute, ClubRoute, PlayerRoute } from "../../resources";

export namespace RoutesPrivateRoute {
  export const Index = Router();
  Index.use([
    AuthenticationRoute.Index,
    PlayerRoute.Index,
    ClubRoute.Index,
  ]);
}
