<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use TCG\Voyager\Models\Menu;
use TCG\Voyager\Voyager;

class HomeController extends Controller
{
    public function layout(Request $request){
        $menu_top = \menu('home', '_json');
        return response()->json(['top_menu' => $menu_top]);
    }
}
