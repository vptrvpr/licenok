<?php

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


/**
 * Pages
 */

Route::get( '/', 'PagesController@index' )->name( 'index' );
Route::get( '/our_kindergarten', 'PagesController@ourKindergarten' )->name( 'our_kindergarten' );
Route::get( '/staff', 'PagesController@staff' )->name( 'staff' );
Route::get( '/daily_regime', 'PagesController@dailyRegime' )->name( 'daily_regime' );
Route::get( '/eat', 'PagesController@eat' )->name( 'eat' );
Route::get( '/progress', 'PagesController@progress' )->name( 'progress' );
Route::get( '/extra_classes', 'PagesController@extraСlasses' )->name( 'extra_classes' );
Route::get( '/price', 'PagesController@price' )->name( 'price' );
Route::get( '/contacts', 'PagesController@contacts' )->name( 'contacts' );

/**
 * Send
 */
Route::post( '/send_email', 'SendController@email' )->name( 'sendEmail' );

