import express from 'express';

import { getOriginalUrl, createShortUrl, home } from '../controllers/urlController.js';

import Url from '../models/Url.js';

const router = express.Router();

router.get("/", home);
router.get("/:shortUrl", getOriginalUrl);
router.post("/shorten", createShortUrl);


export default router;