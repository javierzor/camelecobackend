<?php
namespace App;
use Illuminate\Database\Eloquent\Model;

class ingresomaterial extends Model
{
    protected $table = 'ingreso_material';
    // aceptamos todas las columnas de la tabla para este modelo con un guarded vacio...
    protected $guarded = [];  
    public $timestamps = false;
}