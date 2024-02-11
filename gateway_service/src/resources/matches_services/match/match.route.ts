import { Router } from "express";
import { MatchController } from "./match.controller.js";

export namespace MatchRoute {
  export const Index = Router();
  Index.get("/user/history", [MatchController.GetUserHistory]);
  Index.get("/match/scoreboard", [MatchController.GetMatchScoreBoard]);

  /**
   * @openapi
   * paths:
   *   /resources/user/ongoing_match:
   *     get:
   *       tags:
   *         - Match Controller
   *       summary: Get ongoing matches
   *       parameters:
   *         - in: query
   *           name: id
   *           required: false
   *           schema:
   *             type: string
   *           description: ID of the user (optional for now)  
   *       responses:
   *         201:
   *           description: Created
   *         500:
   *           description: Internal Server Error
  */
  Index.get("/user/ongoing_match", [MatchController.GetOngoingMatchByUser]);
  /**
   * @openapi
   * paths:
   *   /resources/user/upcoming_match:
   *     get:
   *       tags:
   *         - Match Controller
   *       summary: Get all upcoming matches
   *       parameters:
   *         - in: query
   *           name: page_no
   *           required: true
   *           default: 1
   *           schema:
   *             type: string
   *           description: page no
   *         - in: query
   *           name: page_size
   *           required: true
   *           schema:
   *             type: string
   *             default: 3
   *           description: page size
   *       responses:
   *         201:
   *           description: Created
   *         500:
   *           description: Internal Server Error
  */
  Index.get("/user/upcoming_match", [MatchController.GetUpcomingMatchByUser]);



  
  // Index.get("/club/search", [ClubController.GetClub]);


  /**
   * @openapi
   * paths:
   *   /resources/current_match_players:
   *     get:
   *       tags:
   *         - Match Controller
   *       summary: Get players list by match
   *       parameters:
   *         - in: query
   *           name: id
   *           required: true
   *           schema:
   *             type: string
   *           description: ID of the match 
   *         - in: query
   *           name: player_type
   *           required: true
   *           schema:
   *             type: string
   *             default: forward
   *           description: ID of the match 
   *       responses:
   *         201:
   *           description: Created
   *         500:
   *           description: Internal Server Error
  */

  Index.get("/current_match_players", [MatchController.PlayersByMatch]);















  /**
   * @openapi
   * paths:
   *   /resources/match:
   *     post:
   *       tags:
   *         - Match Controller
   *       summary: Insert a new match
   *       requestBody:
   *         required: true
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               required:
   *                 - team1
   *                 - team2
   *                 - team1players
   *                 - team2players
   *                 - match_time
   *               properties:
   *                 team1:
   *                   type: string
   *                   example: '65bd5ec451c93bcb37cb8ed4'
   *                 team2:
   *                   type: string
   *                   example: '65bd5ec451c93bcb37cb8ed4'
   *                 team1players:
   *                   type: array
   *                   items:
   *                     type: string
   *                   example: ['65bb44df535b2e1747433d2d', '65bb44df535b2e1747433d2d']
   *                 team2players:
   *                   type: array
   *                   items:
   *                     type: string
   *                   example: ['65bb44df535b2e1747433d2d', '65bb44df535b2e1747433d2d']
   *                 match_time:
   *                   type: string
   *                   format: date-time
   *                   example: '2024-01-22T12:00:00Z'
   *       responses:
   *         201:
   *           description: Created
   *         500:
   *           description: Internal Server Error
  */

  Index.post("/match", [MatchController.CreateMatch]);


  /**
* @openapi
* '/resources/match':
*   get:
*     tags:
*       - Match Controller
*     summary: Match list
*     parameters:
*       - in: query
*         name: id
*         schema:
*           type: string
*         description: get Match by id
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
  Index.get("/match", [MatchController.GetMatch]);



  /**
 * @openapi
 * paths:
 *   /resources/match:
 *     patch:
 *       tags:
 *         - Match Controller
 *       summary: Update a match
 *       parameters:
 *         - in: query
 *           name: id
 *           required: true
 *           schema:
 *             type: string
 *           description: ID of the match to update
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 team1:
 *                   type: string
 *                   example: '65bd5ec451c93bcb37cb8ed4'
 *                 team2:
 *                   type: string
 *                   example: '65bd5ec451c93bcb37cb8ed4'
 *                 team1players:
 *                   type: array
 *                   items:
 *                     type: string
 *                   example: ['65bb44df535b2e1747433d2d', '65bb44df535b2e1747433d2d']
 *                 team2players:
 *                   type: array
 *                   items:
 *                     type: string
 *                   example: ['65bb44df535b2e1747433d2d', '65bb44df535b2e1747433d2d']
 *                 match_time:
 *                   type: string
 *                   format: date-time
 *                   example: '2024-01-22T12:00:00Z'
 *       responses:
 *         200:
 *           description: OK
 *         400:
 *           description: Bad Request
 *         401:
 *           description: Unauthorized
 *         500:
 *           description: Internal Server Error
 */

  Index.patch("/match", [MatchController.UpdateMatch]);



    /**
* @openapi
* '/resources/match':
*   delete:
*     tags:
*       - Match Controller
*     summary: Match Delete
*     parameters:
*       - in: query
*         name: id
*         schema:
*           type: string
*         description: delete match by id
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
  Index.delete("/match", [MatchController.DeleteMatch]);



}
