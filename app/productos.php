<?php
namespace App;
use Illuminate\Database\Eloquent\Model;

class productos extends Model
{
    protected $table = 'productos';
    // aceptamos todas las columnas de la tabla para este modelo con un guarded vacio...
    protected $guarded = [];  
    public $timestamps = false;
}

