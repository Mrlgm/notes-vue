import request from '../helpers/request.js'

const URL = {
    GET_LIST: '/notes',
    CREATE: '/notes/add',
    UPDATE: '/notes/edit',
    DELETE: '/notes/delete'
}

export default {
    getNotes() {
        return request(URL.GET_LIST, 'GET')
    },
    updateNotes({noteId, content, complete, grade}) {
        return request(URL.UPDATE, 'POST', {noteId, content, complete, grade})
    },
    deleteNote({noteId}) {
        return request(URL.DELETE, 'POST', {noteId})
    },
    addNotes({content = '', grade = 0}) {
        return request(URL.CREATE, 'POST', {content, grade})
    }
}
