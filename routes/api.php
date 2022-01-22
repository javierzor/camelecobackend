<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Route::get('/controlador', function() {
//     Artisan::call('make:controller variosController');
// });

//controlador de pruebas de Api Postman apirest:
Route::get('/prueba', 'App\Http\Controllers\variosController@prueba');

//controladores de Autenticacion:
Route::post('/usuarios', 'App\Http\Controllers\variosController@usuarios');

//controladores de permisos:
Route::post('/rol', 'App\Http\Controllers\variosController@rol');

//controladores de login:
Route::post('/empieza', 'App\Http\Controllers\variosController@empieza');
Route::post('/empiezalogin', 'App\Http\Controllers\variosController@empiezalogin');


//Varias Funciones:
Route::post('/variasfunciones', 'App\Http\Controllers\variosController@variasfunciones');




