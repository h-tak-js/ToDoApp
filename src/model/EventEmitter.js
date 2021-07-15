export class EventEmitter {
    constructor() {
        this._listeners = new Map();
    }

    /**
     * リスナー登録
     * @param {string} tyep 
     * @param {Function} listner 
     */
    addEventListener(type, listner) {
        // 指定したイベントに対応するSetを作成し、リスナー関数を登録する
        if (!this._listeners.has(type)) {
            this._listeners.set(type, new Set());
        }
        const listnerSet = this._listeners.get(type);
        listnerSet.add(listner);
    }

    /**
     * 指定したイベントのディスパッチ
     * @param {string} type イベント名
     * @return {null}
     */
    emit(type) {
        const listnerSet = this._listeners.get(type);
        if (!listnerSet) {
            return;
        }
        listnerSet.forEach(listener => {
            listener.call(this);
        });
    }

    /**
     * 指定したイベントのリスナーを解除する
     * 
     * @param {string} type 
     * @param {Function} listner 
     * @returns 
     */
    removeEventListener(type, listner) {
        const listnerSet = this._listeners.get(type);
        if (!listnerSet) {
            return;
        }
        listnerSet.forEach(ownListener => {
            if (ownListener === listener) {
                listenerSet.delete(listener);
            }
        });
    }
}