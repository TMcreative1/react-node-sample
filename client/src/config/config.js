const config = {
    server: {
        host: 'localhost',
        port: 3000,
        url: function () {
            return `http://${this.host}:${this.port}`;
        }
    }
}

export default config;