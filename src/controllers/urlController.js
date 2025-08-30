// src/controllers/urlController.js
import { createShortUrl, findOriginalUrl } from '../services/urlService.js';

export async function getOriginalUrl(req, res) {
  try {
    const url = await findOriginalUrl(req.params.shortUrl);
    res.redirect(url.fullUrl);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
}

export async function createShortUrlController(req, res) {
  try {
    const newUrl = await createShortUrl(req.body.url);
    const host = req.get("host");

    res.json({
      shortUrl: `http://${host}/${newUrl.shortUrl}`,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export function home(req, res) {
  res.send("Hola mundo");
}
