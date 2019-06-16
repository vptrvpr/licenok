<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use \Mail;

class SendController extends Controller
{
    /**
     * @param Request $request
     */
    public function email(Request $request){
        $contacts = $request->get('contacts');

        Mail::send('emails.contacts', ['contacts' => $contacts], function ($m) {
            $m->from('info@cps-company.ru', 'Новая заявка');
            $m->to(env('EMAIL_NOTIF'))->subject('Новая заявка на сайте');
        });
    }
}
