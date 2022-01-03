class Proxy {
    setContext(ctx) {
        this.ctx = ctx;
    }

    isAvailableContext() {
        const allowed = Boolean(this.ctx);

        if (!allowed) throw Error('Proxy is not assignable');

        return allowed;
    }
}

class PopupService extends Proxy {
    show(value) {
        if (this.isAvailableContext()) {
            this.ctx.show(value);
        }
    }
    hide(value) {
        if (this.isAvailableContext()) {
            this.ctx.hide(value);
        }
    }
}

export default new PopupService();
