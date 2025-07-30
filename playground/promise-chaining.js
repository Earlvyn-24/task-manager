require('../src/db/mongoose')
const User = require('../src/models/user')

// 6881bdbcc1c9837368dcd07f

// User.findByIdAndUpdate('68830dd2bb47e03fd1527fbf', { age: 1 }).then((user) => {
//     console.log(user)
//     return User.countDocuments({ age: 1 })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const updateAgeAndCount = async (id, age) => {

    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })
    return count


}

updateAgeAndCount('68830dd2bb47e03fd1527fbf', 2).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})