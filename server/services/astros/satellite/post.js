const dbSatellite = _db.queryFirst(
    'SELECT * FROM satellite WHERE lower(name) = lower(?)' ,
   _req.getString('nome')
   )
  
  if (dbSatellite) {
      _header.status(409)
      _out.json(
          _val.map()
              .set('erro', true)
              .set('mensagem', 'registro-ja-existe')
      )
      _exec.stop() 
  }
  
  const nome = _req.getString('nome')
  const raio = _req.getString('raio')
  const rotacao = _req.getString('rotacao')
  const planeta_mae = _req.getInt('estrela_mae')
  
  
  _db.insert(
      'satellite',
      _val.map()
          .set('name', nome)
          .set('rotation', rotacao)
          .set('radius', raio)
          .set('star_id', planeta_mae)
  );
  
  _out.json(
      _val.map()
          .set("resultado", true)
  )