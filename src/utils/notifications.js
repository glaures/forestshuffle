const API_ERROR = 'Die 4 Better Work Website hat ein technisches Problem bei der Server-Verbindung festgestellt. ' +
    'Bitte lade die Seite neu! ' +
    'Sollte das Problem dadurch nicht behoben sein, kontaktiere uns bitte telefonisch!'
const INT_ERROR = 'Es ist ein unerwarteter Fehler aufgetreten. Bitte kontaktiere uns über das Kontaktformular oder telefonisch!'

import {useToast, TYPE} from 'vue-toastification'

const toast = useToast()

function showMessage(message) {
    if (message != null) {
        let type;
        type = TYPE.SUCCESS;
        if (message.type === 'danger')
            type = TYPE.ERROR
        if (message.type === 'warning')
            type = TYPE.WARNING
        toast(message.message, {
            type: type
        })
    }
}

function showInfo(message) {
    toast(message, {
        type: 'info'
    })
}

function showError(message) {
    toast(message, {
        type: 'danger'
    })
}

function showWarning(message) {
    toast(message, {
        type: 'warning'
    })
}

function handleError(err, silent) {
    console.error(err)
    let msg = ''
    let type = 'danger'
    if (err.response) {
        // client received an error response (5xx, 4xx)
        msg = err.response.data
        if (msg?.message)
            msg = msg.message
        else
            msg = INT_ERROR
        if (err.response.status < 500)
            type = 'warning'
    } else if (err.request) {
        // client never received a response, or request never left
        msg = API_ERROR
    } else {
        // anything else
        msg = INT_ERROR
    }
    if (!silent)
        showMessage({
            message: msg,
            type: type
        })
}


export {showMessage, showError, showInfo, showWarning, handleError}