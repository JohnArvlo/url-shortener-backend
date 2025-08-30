// src/services/urlServices.js
import Url from '../models/Url.js';
import shortid from 'shortid';

/**
 * Validate a URL format
 */
function isValidUrl(url) {
  try {
    new URL(url); // lanza error si no es válida
    return true;
  } catch {
    return false;
  }
}

/**
 * Create or return an existing short URL
 */
export async function createShortUrl(fullUrl) {
  // 1. Validar
  if (!isValidUrl(fullUrl)) {
    throw new Error('Invalid URL');
  }

  // 2. Evitar duplicados
  const existing = await Url.findOne({ fullUrl });
  if (existing) return existing;

  // 3. Generar shortId único
  const shortUrl = shortid.generate();

  // 4. Guardar en DB
  const newUrl = await Url.create({
    fullUrl,
    shortUrl,
  });

  return newUrl;
}

/**
 * Find the original URL by short code
 */
export async function findOriginalUrl(shortUrl) {
  const url = await Url.findOne({ shortUrl });
  if (!url) {
    throw new Error('URL not found');
  }
  return url;
}
