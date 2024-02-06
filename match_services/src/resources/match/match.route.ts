import { Router } from "express";
import { validateRequest } from "zod-express-middleware";
import { UtilValidation } from "../../utils/index.js";
import { MatchController } from "./match.controller.js";
import { MatchValidation } from "./match.validation.js";

export namespace MatchRoute {
  export const Index = Router();



  Index.post("/match", [validateRequest(MatchValidation.CreateMatch), MatchController.CreateMatch]);

  Index.get("/match", [MatchController.GetMatch]);


  Index.delete("/match/:id", [UtilValidation.Id, MatchController.DeleteMatch]);
  Index.patch("/match/:id", [MatchController.UpdateMatch]);




  Index.get("/current_match_players", [MatchController.PlayersByMatch]);

}
