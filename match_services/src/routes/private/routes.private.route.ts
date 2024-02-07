import { Router } from "express";
import {
  ClubRoute,
  MatchRoute,
  PlayerRoute,
  EventRoute,

} from "../../resources";
// import { ClubRoute } from "../../resources/club";
export namespace RoutesPrivateRoute {
  export const Index = Router();
  Index.use([
    ClubRoute.Index,
    PlayerRoute.Index,
    MatchRoute.Index,
    EventRoute.Index
  ]);
}
