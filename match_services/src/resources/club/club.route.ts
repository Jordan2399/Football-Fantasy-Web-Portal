import { Router } from "express";
import { ClubController, ClubValidation } from "./index.js";
import { validateRequest } from "zod-express-middleware";
import { UtilValidation } from "../../utils/index.js";
import { ClubImage } from "../../vendor/multer/config.js";

export namespace ClubRoute {
  export const Index = Router();

  /**
 * @openapi
 * '/heartcheck':
 *   get:
 *     tags:
 *       - Heart Check
 *     summary: Check if server is running
 *     responses:
 *       200:
 *         description: OK
 */




    /**
 * @openapi
 * '/resources/club':
 *   get:
 *     tags:
 *       - Club Controller
 *     summary: Clubs list
 *     responses:
 *       200:
 *         description: OK
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Not Found
 *       500:
 *         description: Server Error
 */



  Index.get("/club", [ClubController.GetClub]);


  Index.delete("/club", [UtilValidation.Id, ClubController.DeleteClub]);
  

  Index.post('/club', [
    ClubImage.fields([
      { name: 'image', maxCount: 1 }
    ]), validateRequest(ClubValidation.CreateClub), ClubController.CreateClub
  ]);



  Index.patch("/club", [ClubImage.fields([
    { name: 'image', maxCount: 1 }
  ]), ClubController.UpdateClub]);





}
