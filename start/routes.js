'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

/** Home */
Route.get('/', 'HomeController.index').middleware('guest')


/** Routes */
//Register User
Route.post('/users', 'UserController.registerUser')
//Display All Users
Route.get('/users', 'UserController.getUsers')
//Display Specific User
Route.get('/users/:user', 'UserController.getSpecificUser')
//Edit User Details
Route.put('/users/:user', 'UserController.editUser')
//Delete User Details
Route.delete('/users/:user', 'UserController.deleteUser')