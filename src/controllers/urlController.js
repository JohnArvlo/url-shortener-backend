import Url from '../models/Url.js';

export async function getOriginalUrl(req, res) {
    const find = await Url.findOne({shortUrl: req.params.shortUrl}); //encuentra uno, solo find retorna mas de uno
  res.redirect(find.fullUrl);
}

export async function createShortUrl(req, res) {
    console.log("Url: " + req.body.url);
    
    const insert = await Url.create({fullUrl: req.body.url})
    
    const host = req.get("host");
    const response = {shortUrl: `http://${host}/${insert.shortUrl}`}; 

    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(response));

}

export function home(req, res){
    res.send("Hola mundo");
}
