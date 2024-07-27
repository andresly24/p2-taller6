var express = require('express');
var router = express.Router();
const axios = require('axios');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/photos/delete', function (req, res, next) {
  res.render('fotos_delete', { title: 'Eliminar Foto' });
});

router.post('/photos/delete', async function (req, res, next) {
  let { id } = req.body;
  const URL = `http://localhost:3000/rest/delete/${id}`;

  try {
    const response = await axios.delete(URL);
    if (response.status === 200) {
      res.redirect('/rest/view');
    } else {
      res.redirect('/photos/delete');
    }
  } catch (error) {
    console.error('Error al eliminar la foto:', error);
    res.redirect('/photos/delete');
  }
});


module.exports = router;
