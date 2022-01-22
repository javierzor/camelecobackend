<?php
namespace App;
use Illuminate\Database\Eloquent\Model;

class permisosderol extends Model
{
    protected $table = 'rol_permisos';
    // aceptamos todas las columnas de la tabla para este modelo con un guarded vacio...
    protected $guarded = [];  
    public $timestamps = false;
}

