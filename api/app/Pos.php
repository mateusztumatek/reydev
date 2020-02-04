<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Pos extends Model
{
    protected $fillable = ['title', 'content', 'image', 'url', 'active'];
}
