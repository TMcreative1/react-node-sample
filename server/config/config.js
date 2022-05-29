const config = {
    app: {
        port: 3000,
    },
    db: {
        user: '',
        password: '',
        host: '',
        url() {
            return `mongodb+srv://${this.user}:${this.password}@${this.host}/?retryWrites=true&w=majority`;
        },
    },
};

export default config;
