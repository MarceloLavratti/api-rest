import { inquiry } from "../database/connection.js"

class SelecaoRepository {
    // CRUD
    create(selecao) {
        const sql =  "INSERT INTO selecoes SET ?;"
        return inquiry(sql, selecao, 'Não foi possível cadastrar')
    }

    findAll() {
        const sql =  "SELECT * from selecoes;"
        return inquiry(sql, 'Não foi possível localizar')
    }

    findById(id) {
        const sql =  "SELECT * from selecoes WHERE id=?;"
        return inquiry(sql, id, 'Não foi possível localizar')
    }

    update(selecao, id) {
        const sql =  "UPDATE selecoes SET ? WHERE id=?;"
        return inquiry(sql, [selecao, id], 'Não foi possível atualizar')     
    }

    delete(id) {
        const sql =  "DELETE FROM selecoes WHERE id=?;"
        return inquiry(sql, id, 'Não foi possível apagar')
    }
}

export default new SelecaoRepository
