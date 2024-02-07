import { Router } from "express";
import { PlayerController, } from "./index.js";

export namespace PlayerRoute {
  export const Index = Router();


  /**
* @openapi
* '/resources/player':
*   get:
*     tags:
*       - Player Controller
*     summary: players list
*     parameters:
*       - in: query
*         name: id
*         schema:
*           type: string
*         description: get player by id
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
  Index.get("/player", [PlayerController.GetPlayer]);





  /**
   * @openapi
   * /resources/player:
   *   post:
   *     tags:
   *       - Player Controller
   *     summary: Create a player
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               name:
   *                 type: string
   *                 default: Roshan Devkota
   *               age:
   *                 type: string
   *                 default: 26
   *               player_type:
   *                 type: string
   *                 enum: [goalkipper, defender, midfielder, forward]
   *               club_id:
   *                 type: string
   *                 default: 65c2c57dfce2d4a88de7b63c
   *     responses:
   *       '201':
   *         description: Player created successfully
   *       '400':
   *         description: Bad Request
   *       '401':
   *         description: Unauthorized
   *       '500':
   *         description: Server Error
   */


  Index.post("/player", [PlayerController.CreatePlayer]);



  
  
  
  
  
  
  
  
  
  
    /**
   * @openapi
   * /resources/player:
   *   patch:
   *     tags:
   *       - Player Controller
   *     summary: Update a player
   *     parameters:
   *       - in: query
   *         name: id
   *         schema:
   *           type: string
   *         description: The ID of the player to update
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               name:
   *                 type: string
   *               age:
   *                 type: string
   *               player_type:
   *                 type: string
   *                 enum: [goalkipper, defender, midfielder, forward]
   *               club_id:
   *                 type: string
   *                 default: 65c36a42f4852db414c9c4d8
   *     responses:
   *       '200':
   *         description: Player updated successfully
   *       '400':
   *         description: Bad Request
   *       '401':
   *         description: Unauthorized
   *       '500':
   *         description: Server Error
   */

  
  Index.patch("/player", [PlayerController.UpdatePlayer]);












  /**
* @openapi
* '/resources/player':
*   delete:
*     tags:
*       - Player Controller
*     summary: Player Delete
*     parameters:
*       - in: query
*         name: id
*         schema:
*           type: string
*         description: delete player by id
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

  Index.delete("/player", [PlayerController.DeletePlayer]);



}
