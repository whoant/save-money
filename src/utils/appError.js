class appError {
    constructor(msg, code) {
        this.msg = msg;
        this.status = code;
    }
};

module.exports = appError;