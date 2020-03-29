'use strict'

const User = use('App/Models/User')

class UserController {

    async registerUser({ request, response }) {
        try {
            const userData = request.only(['username', 'email', 'password'])
            const userDataExists = await User.findBy('email', userData.email)
            if (userDataExists) {
                return response.send('User already registered')
            }
            const newUser = await User.create(userData)
            return newUser
        } catch (error) {
            response.send(error.message)
        }
    }

    async getUsers(){
        return await User.all()
    }

    async getSpecificUser({ params }){
        const userId = params.user
        const specificUserData = await User.findByOrFail('id', userId)
        const userData = specificUserData.toJSON()
        return userData
    }

    async editUser({ params, request, response }){
        const userId = params.user
        const editUserData = await User.findByOrFail('id', userId)
        editUserData.username = request.body.username
        editUserData.email = request.body.email
        await editUserData.save()
        return editUserData
    }

    async deleteUser({ params }){
        const userId = params.user
        const userRecord = await User.findByOrFail('id', userId)
        userRecord.delete()
    }
}

module.exports = UserController
