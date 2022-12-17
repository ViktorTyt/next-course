export default function getById(req, res) {
  res.status(200).json({ yourId: req.query.id });
}
