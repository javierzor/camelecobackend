<?php
namespace App;
use Illuminate\Database\Eloquent\Model;

class rolinfo extends Model
{
    protected $table = 'rol_detalles';
    // aceptamos todas las columnas de la tabla para este modelo con un guarded vacio...
    protected $guarded = [];  
    public $timestamps = false;
}

