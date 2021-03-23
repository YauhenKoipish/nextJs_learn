export default function GetById(req, res) {
  //   res.statusCode = 200;
  //   res.setHeader("Content-type", "application/json");
  //   res.end(req.query.id);
  res.json({ yourId: req.query.id });
}
