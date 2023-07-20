let tasks = null;
class Tasks {
    constructor() {
        this.index = 0;
        this.taskCollection = [];
    }

    addTask(task) {
        this.taskCollection.push(task);
        this.index += 1;
        this.storeData();
    }

    removeTask(idx, one) {
        console.log('===================================');
        console.log(this.taskCollection[idx]);
        this.taskCollection = this.taskCollection.filter((tsk) => idx != tsk.index);
        if(this.idx > 0) {
            this.index -= 1;
        }

        console.log(one);
        if(one) {
           
            for (let j = 0; j < this.taskCollection.length; j += 1) {
                this.taskCollection[j].index = j;
                this.index += 1;
            }
        }   

        this.storeData();
        console.log('===================================');
    }

    storeData() {
        const strData = JSON.stringify(tasks.taskCollection);
        localStorage.setItem('data', strData);
    }

    restoreData () {
        const strData = localStorage.getItem('data');
        if (strData) {
            tasks.taskCollection = JSON.parse(strData);
        }        
    }
}

tasks = new Tasks();

export { tasks };