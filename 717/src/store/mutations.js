const mutations = {
    pushCar (state, data) {
        let flag = true;
        state.carList.forEach((item) => {
            if (item.id === data.id) {
               flag = false;
               item.count++;
            }
        });
       if (flag) {
            data.count = 1;
            data.isChecked = false;
            state.carList.push(data);
            state.count++;
       }
    },
    changeSum (state, data) {
        let sum = 0;
        state.check_all = true;
        state.carList.forEach((item) => {
            if (item.id == data.id) {
                item.isChecked = data.isChecked;
            }
            if (item.isChecked == true) {
                sum += item.count * item.price;
            } else {
                state.check_all = false;
            }
        })
        state.sum = sum;
    },
    addCount (state, data) {
        state.carList.forEach((item) => {
            if (item.id === data.id) {
               item.count++;
            }
        });
        this.commit('changeSum',data);
    },
    subCount (state, data) {
        state.carList.forEach((item) => {
            if (item.id === data.id) {
               item.count--;
            }
        });
        this.commit('changeSum',data);
    },
    checkAll (state, isChecked) {
        let sum = 0;
        state.carList.forEach((item) => {
                item.isChecked = isChecked;
            if (item.isChecked == true) {
                sum += item.count * item.price;
            }
        })
        state.sum = sum;
    },
    changeAdsList (state, data) {
        state.adsList = data;
    }
};
export default mutations;
