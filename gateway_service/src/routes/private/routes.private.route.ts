import { Router } from "express";
import { AuthenticationRoute, FantasyRoute } from "../../resources";
export namespace RoutesPrivateRoute {
  export const Index = Router();
  Index.use([
    AuthenticationRoute.Index,
    FantasyRoute.Index
  ]);
}
