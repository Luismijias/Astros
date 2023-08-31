const dbPlanet = _db.queryFirst(
  'SELECT * FROM planet WHERE lower(name) = lower(?)' ,
 _req.getString('nome')
 )

if (dbPlanet) {
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
const estrela_mae = _req.getInt('estrela_mae')


_db.insert(
    'planet',
    _val.map()
        .set('name', nome)
        .set('rotation', rotacao)
        .set('radius', raio)
        .set('star_id', estrela_mae)
);

_out.json(
    _val.map()
        .set("resultado", true)
)
