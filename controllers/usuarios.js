const { response } = require('express');

const usuariosGet = (req = request, res = response) => {

  const {q,idkey,altura} = req.query;

    res.json({
        msg: 'Get Api - Controlador',
        q,
        idkey,
        altura
    });
  }

  const usuariosPut = (req, res = response) => {

    const { id } = req.params;

    res.json({
        msg: 'Put Api - Controlador',
        id
    });
  }

  const usuariosPost = (req, res = response) => {

    const { nombre,edad } = req.body; 

    res.json({
        msg: 'Post Api - Controlador',
        nombre,
        edad
    });
  }

  const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'Delete Api - Controlador'
    });
  }


  module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete
  }