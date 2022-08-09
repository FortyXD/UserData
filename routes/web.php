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

//Таблица соответствует 3 нормальной форме
Route::get('/', [\App\Http\Controllers\Controller::class, 'index']);
//Запрос данных о рабочих
Route::get('/GetData', [\App\Http\Controllers\Workers::class, 'index']);
// нахождение данных для страны и профессии.
Route::post('/GetDataById', [\App\Http\Controllers\Workers::class, 'FindById']);
//Обновление данных для рабочего
Route::post('/UpdateData', [\App\Http\Controllers\Workers::class, 'edit']);


//удаление либо страны, либо профессии
Route::post('/DeleteKey', [\App\Http\Controllers\Workers::class, 'Delete_key']);

//нахождение Всех данных профессиях и стран
Route::post('/GetKeyById', [\App\Http\Controllers\Workers::class, 'find_key']);
//
Route::get('/Worker/Create', function (){
    return view('Create');
});


Route::post('/ChangeKey', [\App\Http\Controllers\Workers::class, 'ChangeId']);


Route::post('/CheckIfIsNew', [\App\Http\Controllers\Workers::class, 'CheckId']);

//Создание рабочего
Route::post('/CreateWorker',[\App\Http\Controllers\Workers::class,'create']);



Route::post('/DeleteUselessDataKey',[\App\Http\Controllers\Workers::class,'DeleteDataKey']);


//Удаление работникав
Route::post('/DeleteWorker',[\App\Http\Controllers\Workers::class,'destroy']);
//Регестрация
Auth::routes();
//
Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
