export let hello = (req, res) => {
  let name = req.swagger.params.name.value || 'stranger';
  res.json(`Hello ${name}!!!`);
};