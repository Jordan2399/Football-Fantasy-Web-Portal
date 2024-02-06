import { Router } from "express";
import { ClubController, ClubValidation } from "./index.js";
import { validateRequest } from "zod-express-middleware";
// import { ClubImage } from "../../vendor/multer/config.js";

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
*     parameters:
*       - in: query
*         name: id
*         schema:
*           type: string
*         description: get club by id
*       - in: query
*         name: name
*         schema:
*           type: string
*         description: search by name
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

  //     /**
  //  * @openapi
  //  * '/resources/club?':
  //  *   get:
  //  *     tags:
  //  *       - Club Controller
  //  *     summary: Clubs list by id
  //  *     responses:
  //  *       200:
  //  *         description: OK
  //  *       401:
  //  *         description: Unauthorized
  //  *       404:
  //  *         description: Not Found
  //  *       500:
  //  *         description: Server Error
  //  */

  Index.get("/club", [ClubController.GetClub]);






    /**
* @openapi
* '/resources/club':
*   delete:
*     tags:
*       - Club Controller
*     summary: Clubs Delete
*     parameters:
*       - in: query
*         name: id
*         schema:
*           type: string
*         description: get club by id
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

  Index.delete("/club", [ClubController.DeleteClub]);

  // Index.get("/club/:id", [ClubController.GetClub]);
  // // Index.get("/club/search", [ClubController.GetClub]);
  // // Index.post("/club", [validateRequest(ClubValidation.CreateClub), ClubController.CreateClub]);
  // Index.patch("/club/:id", [ClubImage.fields([
  //   { name: 'image', maxCount: 1 }
  // ]), ClubController.UpdateClub]);

  // Index.post('/club', [
  //   ClubImage.fields([
  //     { name: 'image', maxCount: 1 }
  //   ]), validateRequest(ClubValidation.CreateClub), ClubController.CreateClub
  // ]);

}
