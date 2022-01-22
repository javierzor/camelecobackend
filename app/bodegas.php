<?php
namespace App;
use Illuminate\Database\Eloquent\Model;

class bodegas extends Model
{
    protected $table = 'bodegas';
    // aceptamos todas las columnas de la tabla para este modelo con un guarded vacio...
    protected $guarded = [];  
    public $timestamps = false;
}

