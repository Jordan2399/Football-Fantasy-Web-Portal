import { Router } from "express";
import { validateRequest } from "zod-express-middleware";
import { EventController } from "./index.js";


export namespace EventRoute {
  export const Index = Router();


 /**
   * @openapi
   * paths:
   *   /resources/event:
   *     get:
   *       tags:
   *         - Event Controller
   *       summary: Get events
   *       parameters:
   *         - in: query
   *           name: id
   *           required: true
   *           schema:
   *             type: string
   *             default: 65be577cc4df1957c9bda162
   *           description: ID of the user 
   *       responses:
   *         201:
   *           description: Created
   *         500:
   *           description: Internal Server Error
  */


  // Index.get("/event", [MatchController.GetMatch]);
  Index.get("/event", [EventController.GetEventsMatch]);
  // Index.get("/club/search", [ClubController.GetClub]);





  /**
 * @openapi
 * paths:
 *   /resources/event:
 *     post:
 *       tags:
 *         - Event Controller
 *       summary: Insert a new event
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               required:
 *                 - match_id
 *                 - player_id
 *                 - activity_type
 *               properties:
 *                 match_id:
 *                   type: string
 *                   example: '65bed524f58466a5bf43e262'
 *                 player_id:
 *                   type: string
 *                   example: '65bb4fb11833e66d62c154aa'
 *                 activity_type:
 *                   type: string
 *                   default: goal
 *       responses:
 *         201:
 *           description: Created
 *         500:
 *           description: Internal Server Error
 */
 
  Index.post("/event", [ EventController.CreateEvent]);
  // Index.delete("/match/:id", [UtilValidation.Id, EventController.DeleteEvent]);





  // Index.patch("/match/:id", [MatchController.UpdateMatch]);



}
