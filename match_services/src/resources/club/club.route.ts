import { Router } from "express";
import { ClubController, ClubValidation } from "./index.js";
import { validateRequest } from "zod-express-middleware";
import { UtilValidation } from "../../utils/index.js";
import { ClubImage } from "../../vendor/multer/config.js";

export namespace ClubRoute {
  export const Index = Router();



 
  Index.post('/club', [
    ClubImage.fields([
      { name: 'image', maxCount: 1 }
    ]), validateRequest(ClubValidation.CreateClub), ClubController.CreateClub
  ]);

}
