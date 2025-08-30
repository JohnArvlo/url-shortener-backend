import express from 'express';
import { 
  getOriginalUrl, 
  createShortUrlController, 
  home 
} from '../controllers/urlController.js';

const router = express.Router();

// Health check / test endpoint
router.get("/", home);

// Crear short URL

/**
 * @swagger
 * /create:
 *   post:
 *     summary: Crear una URL corta
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               url:
 *                 type: string
 *                 example: "https://google.com"
 *     responses:
 *       200:
 *         description: Retorna la URL acortada
 */

router.post("/create", createShortUrlController);

// Redirección a la URL original

/**
 * @swagger
 * /{shortUrl}:
 *   get:
 *     summary: Redirigir a la URL original
 *     parameters:
 *       - in: path
 *         name: shortUrl
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       302:
 *         description: Redirección a la URL original
 *       404:
 *         description: URL no encontrada
 */

router.get("/:shortUrl", getOriginalUrl);

export default router;
