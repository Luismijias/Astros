const dbStar = _db.queryFirst(
  'SELECT * FROM star WHERE lower(name) = lower(?)' ,
 _req.getString('nome')
 )

if (dbStar) {
    _header.status(400)
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

_db.insert(
    'star',
    _val.map()
        .set('name', nome)
        .set('rotation', rotacao)
        .set('radius', raio)
)

_out.json(
    _val.map()
        .set("resultado", true)
)


