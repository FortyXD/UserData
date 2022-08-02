<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [\App\Http\Controllers\Controller::class, 'index']);
Route::get('/GetData', [\App\Http\Controllers\Workers::class, 'index']);

Route::post('/GetDataById', [\App\Http\Controllers\Workers::class, 'FindById']);
Route::post('/UpdateData', [\App\Http\Controllers\Workers::class, 'edit']);

Route::get('/Worker/Create', function (){
    return view('Create');
});


//Route::get('/worker/{id}',[App\Http\Controllers\EditController::class, 'index'])->name('Edit');


Route::post('/CreateWorker',[\App\Http\Controllers\Workers::class,'create']);
Route::post('/DeleteWorker',[\App\Http\Controllers\Workers::class,'destroy']);

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
