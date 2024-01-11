// function processstate() {
//     this.state = state
// }

const Singleton = (function () {
    let pManager
    function ProcessManager() {
        this.numProcess = 0
    }

    function createProcessManager() {
        pManager = new ProcessManager()
        return pManager
    }
    return {
        getProcessManager: () => {
            if (!pManager) {
                pManager = createProcessManager()
                return pManager
            } else return pManager
        }
    }
})()

const processManager = Singleton.getProcessManager()
const processManager2 = Singleton.getProcessManager()

console.log('result: ', (processManager == processManager2));
console.log(processManager, processManager2);