const CancelRequest = {
    state: {
        cancelTokenArr: []
    },
    mutations: {
        pushToken(state, payload) {
            state.cancelTokenArr.push(payload.cancelToken);
        },
        clearToken({cancelTokenArr}) {
            cancelTokenArr.forEach(item => {
                item(499)
            })
            cancelTokenArr = []
        }
    }
}

export default CancelRequest
