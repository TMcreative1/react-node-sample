import mongoose from 'mongoose';

const db = {
    init(config) {
        mongoose.connect(config.db.url(), { useNewUrlParser: true });
    },
};
export default db;
