<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PagesController extends Controller
{
    /**
     * Главная
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index(){
        return view('pages.index');
    }


    /**
     * Наш садик
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function ourKindergarten(){
        return view('pages.our_kindergarten');
    }


    /**
     * Персонал
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function staff(){
        return view('pages.staff');
    }


    /**
     * Режим дня
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function dailyRegime(){
        return view('pages.daily_regime');
    }


    /**
     * Питание
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function eat(){
        return view('pages.eat');
    }


    /**
     * Наши достижения
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function progress(){
        return view('pages.progress');
    }


    /**
     * Дополнительные занятия
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function extraСlasses(){
        return view('pages.extra_сlasses');
    }


    /**
     * Цены
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function price(){
        return view('pages.price');
    }


    /**
     * Контакты
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function contacts(){
        return view('pages.сontacts');
    }
}
