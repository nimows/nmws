const config = {
    web: {
        host: process.env.NODE_HOST || 'localhost',
        port: process.env.NODE_PORT || 3000
    },
    db: {}
}

module.exports = config