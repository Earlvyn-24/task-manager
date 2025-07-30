require('../src/db/mongoose')
const Task = require('../src/models/tasks')

//6883141860c83eebe3cec95c

// Task.findByIdAndDelete('6883141860c83eebe3cec95c').then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })



const deleteAndReturnIncomplete = async (id) => {

    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })

    return count
}


deleteAndReturnIncomplete('68819116ac377befda28dcef').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})