const developpeur = require("./developpeur")

const messageRes = (message, data) => {
    return(
       { message
        , data
    }
    )
}
const getUniqueId = (developpeur) => (developpeur.length)

module.exports = {
    messageRes, 
    getUniqueId
}