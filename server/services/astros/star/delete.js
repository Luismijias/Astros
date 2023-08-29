const dbEstrela = _db.get('star', _req.getString('uid'));

if (!dbEstrela) {
    _header.status(404);
    _out.json(
        _val.map()
            .set('erro', true)
            .set('mensagem', 'registro-nao-encontrado')
    );
    _exec.stop();
}

_db.delete('star', _req.getString('uid'));

_out.json(
    _val.map()
        .set("resultado", true)
);
