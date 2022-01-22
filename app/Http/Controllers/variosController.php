<?php

namespace App\Http\Controllers;
use App\prueba;
use App\permisosdetalles;
use App\permisosderol;
use App\roldetalles;
use App\empieza;
use App\productos;
use App\ingresomaterial;
use App\solicitudfraccionamiento;
use App\bodegas;


use Illuminate\Http\Request;

class variosController extends Controller
{
    public function prueba()
    {
        $prueba = prueba::where('id_de_pruebas','=','1')->first();
         return ($prueba);
    }

    public function rol(Request $data)
    {
        $id_rol=$data->id_rol;
        $rol['detalles']=roldetalles::where('id_rol','=',$id_rol)->first();

        $saberpermisos=permisosderol::where('id_rol','=',$id_rol)->get();
            // foreach para obtener cada permiso de la matriz
            $nuevavariable= Array();
            foreach ($saberpermisos as $index => $unit) 
            {
         $estospermisos[$index]=$saberpermisos[$index]->id_permiso;
        $rol['suspermisos'][$index]=permisosdetalles::where('id_permiso','=',$estospermisos[$index])->get();

            }


        // $estospermisos=$saberpermisos->id_permiso;

        return ($rol);
    }


    public function empiezalogin(Request $data)
    {
        $id_inutilizado=$data->id_inutilizado;
        $codigo_qr_acceso=$data->codigo_qr_acceso;
        $respuestadeintentodeempezarenlaapp=empieza::where('codigo_qr_acceso','=',$codigo_qr_acceso)->get();
        $conocernombredebodega=bodegas::where('id_inutilizado','=',$id_inutilizado)->first();
        if($conocernombredebodega){

            $respuestadeintentodeempezarenlaapp[0]->nombre_bodega=$conocernombredebodega->nombre_bodega;
            
            return($respuestadeintentodeempezarenlaapp);
        }
        else{
        $respuestadeintentodeempezarenlaapp[0]='bodeganoexiste';
        return($respuestadeintentodeempezarenlaapp);
        }



    }

    public function empieza(Request $data)
    {
        $codigo_qr_acceso=$data->codigo_qr_acceso;
        $respuestadeintentodeempezarenlaapp=empieza::where('codigo_qr_acceso','=',$codigo_qr_acceso)->get();
        return($respuestadeintentodeempezarenlaapp);
    }
    

    public function variasfunciones(Request $data)
    {
    //segun el tipo de solicitud puede generarse una consulta diferente.
    switch ($data->nombre_solicitud) {
    case 'prueba':
        $prueba = prueba::where('id_de_pruebas','=','1')->first();
        return ($prueba);
    break;
    //considerando OTRO caso
    case 'todoslosroles':
        $todoslosroles = roldetalles::get();
        return ($todoslosroles);
    
    break;
    //considerando OTRO caso
    case 'guardarusuario':

        $codigo_empleado=$data->codigo_empleado;
        $identificacion=$data->identificacion;
        $nombre=$data->nombre;
        $dependencia=$data->dependencia;
        $activo=$data->activo;
        $id_rol=$data->id_rol;
        $creado_por=$data->creado_por;



        return empieza::create([
            'codigo_empleado'=>$codigo_empleado,
            'codigo_qr_acceso'=>$codigo_empleado,
            'identificacion'=>$identificacion,
            'nombre'=> $nombre,
            'dependencia'=> $dependencia,
            'activo' =>$activo,
            'id_rol' =>$id_rol,
            'creado_por' =>$creado_por

        ]);

    break;
    case 'todoslosusuarios':
        $todoslosusuarios = empieza::orderBy('id','DESC')->get();
        return ($todoslosusuarios);
    break;

    case 'borrarusuario':
        $id=$data->id;
        $respuestadeborrar=empieza::where('id',$id)->delete();
        return ($respuestadeborrar);
    break;

    case 'todoslosroles':
        $todoslosusuarios = roldetalles::orderBy('id','DESC')->get();
        return ($todoslosusuarios);
        break;
    
    case 'conocerpermisosdeunrol':
        $id_rol=$data->id_rol;
        $saberpermisosdelrol=permisosderol::where('id_rol','=',$id_rol)->get();
        return ($saberpermisosdelrol);
  
    break;
        
    case 'agregarpermisosaunrol':
        $id_rol=$data->id_rol;
        $id_permiso=$data->id_permiso;
        $nombre_permiso=$data->nombre_permiso;
        $sabersiesterolyatieneestepermiso=permisosderol::where('id_rol','=',$id_rol)->where('id_permiso','=',$id_permiso)->get();
        if($sabersiesterolyatieneestepermiso->count()<1){

            return permisosderol::create([
                'id_rol'=>$id_rol,
                'id_permiso'=>$id_permiso,
                'nombre_permiso'=>$nombre_permiso
            ]);

        }

        break;

    case 'borrarpermisoderol':
        $id_rol=$data->id_rol;
        $id_permiso=$data->id_permiso;
        $respuestadeborrar=permisosderol::where('id_rol',$id_rol)->where('id_permiso','=',$id_permiso)->delete();
        return ($respuestadeborrar);
    break;

    case 'guardarrol':
        $nombre_rol=$data->nombre_rol;
        $rol_descripcion=$data->rol_descripcion;
        return roldetalles::create([
            'nombre_rol'=>$nombre_rol,
            'rol_descripcion'=>$rol_descripcion,
        ]);

    break;

    case 'borrarrol':

        $id_rol=$data->id_rol;
        $respuestadeborrar=roldetalles::where('id_rol',$id_rol)->delete();
        return ($respuestadeborrar);

    break;

    case 'obtenerproductos':

        $todoslosproductos=productos::get();
        return ($todoslosproductos);

    break;

    case 'guardar_ingreso_material':

        $referencia=$data->referencia;
        $producto=$data->producto;
        $descripcion=$data->descripcion;
        $carreteorrollo=$data->carreteorrollo;
        $numerodenotadeentrada=$data->numerodenotadeentrada;
        $metrosencarrete=$data->metrosencarrete;
        $fecha_autogenerada=$data->fecha_autogenerada;
        $nombre_user=$data->nombre_user;
        $id_user=$data->id_user;
        $bodega=$data->bodega;


        return ingresomaterial::create([
            'referencia'=>$referencia,
            'producto'=> $producto,
            'descripcion'=> $descripcion,
            'bodega'=> $bodega,
            'carreteorrollo' =>$carreteorrollo,
            'numerodenotadeentrada' =>$numerodenotadeentrada,
            'metrosencarrete'=>$metrosencarrete,
            'fecha_autogenerada'=>$fecha_autogenerada,
            'nombre_user'=> $nombre_user,
            'id_user'=> $id_user
        ]);

    break;


    case 'updatearelingresodematerialenelmodal':

        $id=$data->id;
        $referencia=$data->referencia;
        $producto=$data->producto;
        $descripcion=$data->descripcion;
        $carreteorrollo=$data->carreteorrollo;
        $numerodenotadeentrada=$data->numerodenotadeentrada;
        $metrosencarrete=$data->metrosencarrete;
        $fecha_autogenerada=$data->fecha_autogenerada;
        $nombre_user=$data->nombre_user;
        $id_user=$data->id_user;
        $bodega=$data->bodega;


        return ingresomaterial::where('id', $id)->update([
            'referencia'=>$referencia,
            'producto'=> $producto,
            'descripcion'=> $descripcion,
            'carreteorrollo' =>$carreteorrollo,
            'numerodenotadeentrada' =>$numerodenotadeentrada,
            'metrosencarrete'=>$metrosencarrete,
            'fecha_autogenerada'=>$fecha_autogenerada,
            'nombre_user'=> $nombre_user,
            'bodega'=> $bodega,
            'id_user'=> $id_user
            ]);

    break;

    case 'buscarconsulta':
        $referencia=$data->referencia;
        $producto=$data->producto;
        $descripcion=$data->descripcion;

        if($referencia){
            $productosfiltrados=productos::where('referencia', 'LIKE', '%'.$referencia.'%')->get();
        }
        if($producto){
            $productosfiltrados=productos::where('producto', 'LIKE', '%'.$producto.'%')->get();
        }
        if($descripcion){
            $productosfiltrados=productos::where('descripcion', 'LIKE', '%'.$descripcion.'%')->get();
        }

        return ($productosfiltrados);

    break;
    
    case 'obteneringresomaterialdeunproducto':
        $producto=$data->producto;
        $obteneringresomaterialdeunproducto=ingresomaterial::where('bloqueado','=','no')->where('producto','=',$producto)->get();
        return ($obteneringresomaterialdeunproducto);

    break;

    case 'obteneringresomaterialnobloqueados':
        $obteneringresomaterialnobloqueados=ingresomaterial::where('descripcion','!=','null')->where('bloqueado','=','no')->get();
        return ($obteneringresomaterialnobloqueados);

    break;

    case 'bloquearingresodematerial':

    $id=$data->id; 
    $observacion=$data->observacion; 
    return ingresomaterial::where('id', $id)->update([
    'bloqueado' => 'si',
    'observacion' => $observacion
    ]);

    break;

    case 'solicitudfraccionamiento':
        $number = mt_Rand(1000000, 9999999); // better than Rand()
        $documento=$data->documento;
        $metrosafraccionar=$data->metrosafraccionar;
        $observacion=$data->observacion;
        $nombre_solicitador=$data->nombre_solicitador;
        $user_id_solicitador=$data->user_id_solicitador;
        $id_material=$data->id_material;
        $bodega=$data->bodega;
        $carreteorrollo=$data->carreteorrollo;
        $fecha_ingreso_material=$data->fecha_ingreso_material;
        $fecha_orden=$data->fecha_orden;
        $metrosencarrete=$data->metrosencarrete;
        $numerodenotadeentrada=$data->numerodenotadeentrada;
        $producto=$data->producto;
        $referencia=$data->referencia;
        $hora_orden=$data->hora_orden;
        $descripcion=$data->descripcion;

        $traernumbersiexiste=solicitudfraccionamiento::where('numero_fraccionado','=',$number)->first();
        if($traernumbersiexiste){
            //si existe generale otro codigo
            $number = mt_Rand(1000000, 9999999); // better than Rand()
        }

        return solicitudfraccionamiento::create([
            'documento'=>$documento,
            'metrosafraccionar'=> $metrosafraccionar,
            'observacion'=> $observacion,
            'nombre_solicitador'=>$nombre_solicitador,
            'user_id_solicitador'=>$user_id_solicitador,
            'id_material'=>$id_material,
            'bodega'=>$bodega,
            'carreteorrollo'=> $carreteorrollo,
            'fecha_ingreso_material'=> $fecha_ingreso_material,
            'fecha_orden'=>$fecha_orden,
            'metrosencarrete'=> $metrosencarrete,
            'numerodenotadeentrada'=> $numerodenotadeentrada,
            'producto' =>$producto,
            'referencia'=>$referencia,
            'descripcion'=>$descripcion,
            'hora_orden'=>$hora_orden,
            'numero_fraccionado'=>$number

        ]);

    break;


    case 'obtenerordenesdefraccionamientopendientesynobloqueados':
        $obtenerordenesdefraccionamientopendientesynobloqueados=solicitudfraccionamiento::where('bloqueado','=','no')->get();
        return ($obtenerordenesdefraccionamientopendientesynobloqueados);

    break;

    case 'obtenerordenesdefraccionamientopendientesofraccionados':
        $obtenerordenesdefraccionamientopendientesofraccionados=solicitudfraccionamiento::where('bloqueado','=','no')->get();
        return ($obtenerordenesdefraccionamientopendientesofraccionados);

    break;

    case 'bloquearordenfraccionamiento':

        $id_inutilizado=$data->id_inutilizado; 
        $bloqueo_observacion=$data->bloqueo_observacion; 
        $user_nombre_bloqueador=$data->user_nombre_bloqueador; 
        return solicitudfraccionamiento::where('id_inutilizado', $id_inutilizado)->update([
        'bloqueado' => 'si',
        'bloqueo_observacion' => $bloqueo_observacion,
        'user_nombre_bloqueador' => $user_nombre_bloqueador

        ]);
    
        break;

        case 'fraccionarordenfraccionamiento':
            $id_inutilizado=$data->id_inutilizado; 
            $operario_fraccionado=$data->operario_fraccionado; 
            $fecha_fraccionado=$data->fecha_fraccionado; 
            $hora_fraccionado=$data->hora_fraccionado;
            $estado=$data->estado; 


            return solicitudfraccionamiento::where('id_inutilizado', $id_inutilizado)->update([
            'fraccionado' => 'si',
            'operario_fraccionado' => $operario_fraccionado,
            'fecha_fraccionado' => $fecha_fraccionado,
            'hora_fraccionado' => $hora_fraccionado,
            'estado' => $estado
            ]);
        
            break;


            case 'tomarordenfraccionamiento':
                $id_inutilizado=$data->id_inutilizado; 
                $nombre_ordenador=$data->nombre_ordenador; 
                $fecha_fraccionado=$data->fecha_fraccionado; 
                $hora_fraccionado=$data->hora_fraccionado; 
                $estado=$data->estado; 

    
                return solicitudfraccionamiento::where('id_inutilizado', $id_inutilizado)->update([
                'fraccionado' => 'tomada',
                'nombre_ordenador' => $nombre_ordenador,
                'fecha_fraccionado' => $fecha_fraccionado,
                'hora_fraccionado' => $hora_fraccionado,
                'estado' => $estado
                ]);
            
                break;

            case 'obtenerfraccionamientodespuesdefraccionar':
                $id_inutilizado=$data->id_inutilizado; 
                $obtenerfraccionamientodespuesdefraccionar=solicitudfraccionamiento::where('id_inutilizado','=',$id_inutilizado)->get();
                return ($obtenerfraccionamientodespuesdefraccionar);
        
            break;

            case 'auditoria1':
                $auditoria1=solicitudfraccionamiento::where('bloqueado','=','no')->where('fraccionado','=','no')->get();
                return ($auditoria1);
            break;

            case 'auditoria2':
                $auditoria2=solicitudfraccionamiento::where('bloqueado','=','no')->where('fraccionado','=','si')->get();
                return ($auditoria2);
            break;

            case 'auditoria3':
                $auditoria3=solicitudfraccionamiento::where('bloqueado','=','si')->get();
                return ($auditoria3);
            break;


            case 'pantallaentregas':
                $pantallaentregas=solicitudfraccionamiento::get();
                return ($pantallaentregas);
            break;

            case 'entregarcarreteochipaconsultarcodigo':
                $numero_fraccionado=$data->numero_fraccionado; 
                $entregarcarreteochipaconsultarcodigo=solicitudfraccionamiento::where('numero_fraccionado','=',$numero_fraccionado)->get();
                return ($entregarcarreteochipaconsultarcodigo);
            break;

            case 'entregarorden':
                $id_inutilizado=$data->id_inutilizado;
                $operario_entrega=$data->operario_entrega;
                return solicitudfraccionamiento::where('id_inutilizado', $id_inutilizado)->update([
                    'estado' => 'Entregado',
                    'operario_entrega' => $operario_entrega
                    ]);
            break;

            case 'novedadorden':
                $operario_entrega=$data->operario_entrega;
                $tipo_novedad=$data->tipo_novedad; 
                $id_inutilizado=$data->id_inutilizado; 
                return solicitudfraccionamiento::where('id_inutilizado', $id_inutilizado)->update([
                    'estado' => 'Novedad',
                    'tipo_novedad' => $tipo_novedad,
                    'operario_entrega' => $operario_entrega
                    ]);
            break;

            case 'conocertodoslospermisosparaagregarunoaunrol':
                $todoslospermisos = permisosdetalles::get();
                return ($todoslospermisos);
            break;

            case 'vernovedadesdesupervisor':
                $vernovedadesdesupervisor=solicitudfraccionamiento::where('estado', 'Novedad')->get();
                return ($vernovedadesdesupervisor);
            break;

            case 'novedadesentregarorden':
                $id_inutilizado=$data->id_inutilizado;
                return solicitudfraccionamiento::where('id_inutilizado', $id_inutilizado)->update([
                    'estado' => 'Entregado'
                    ]);
            break;

            case 'novedadesentregarordenconnovedad':
                $observa_entrega_con_novedad=$data->observa_entrega_con_novedad;
                $id_inutilizado=$data->id_inutilizado;
                $operario_entrega_con_novedad=$data->operario_entrega_con_novedad;
                return solicitudfraccionamiento::where('id_inutilizado', $id_inutilizado)->update([
                    'estado' => 'Entregado',
                    'observa_entrega_con_novedad' => $observa_entrega_con_novedad,
                    'operario_entrega_con_novedad' => $operario_entrega_con_novedad
                    ]);
            break;


            case 'novedadesvolverafracciona':
                $id_inutilizado=$data->id_inutilizado; 
                return solicitudfraccionamiento::where('id_inutilizado', $id_inutilizado)->update([
                    'estado' => '',
                    'fraccionado' => 'no',
                    'tipo_novedad' => 'ninguna'

                    ]);
            break;

            case 'todoslosroleseditarusuario':
                $todoslosroles = roldetalles::get();
                return ($todoslosroles);
            
            break;

            case 'editarusuariomodal':
                $nombre=$data->nombre; 
                $id_rol=$data->id_rol; 
                $id=$data->id; 
                $activo=$data->activo;
                $modificado_por=$data->modificado_por;
                if($id_rol){
                    return empieza::where('id', $id)->update([
                        'nombre' => $nombre,
                        'id_rol' => $id_rol,
                        'activo' => $activo,
                        'modificado_por' => $modificado_por
                        ]);

                }
                else{
                    return empieza::where('id', $id)->update([
                        'nombre' => $nombre,
                        'activo' => $activo,
                        'modificado_por' => $modificado_por
                        ]);
                }
            break;

            case 'decarreteachipaconsultarcodigo':
                $numero_fraccionado=$data->numero_fraccionado; 
                $entregarcarreteochipaconsultarcodigo=solicitudfraccionamiento::where('numero_fraccionado','=',$numero_fraccionado)->get();
                return ($entregarcarreteochipaconsultarcodigo);
            break;

            case 'consultarpermisosidroldecarreteaotro':
                $numero_fraccionado=$data->numero_fraccionado;
                $id_rol=$data->id_rol; 
                $saberpermisos=permisosderol::where('id_rol','=',$id_rol)->where('id_permiso','=','10')->get();
                return ($saberpermisos);
            break;
            


            case 'autorizarcambiodecarrete':
                $id_inutilizado=$data->id_inutilizado;
                $carreteorrollo=$data->carreteorrollo;
                $nombre_cambio_almacenaje=$data->nombre_cambio_almacenaje; 
 

                return solicitudfraccionamiento::where('id_inutilizado', $id_inutilizado)->update([
                    'carreteorrollo' => $carreteorrollo,
                    'nombre_cambio_almacenaje' => $nombre_cambio_almacenaje,
                    'cambiado' => 'si'
                    
                    ]);
            break;

            case 'auditoria4buscar':
                $auditoria4_numero_fraccionado=$data->auditoria4_numero_fraccionado; 

                $auditoria4_por_numero_fraccionado=solicitudfraccionamiento::where('numero_fraccionado','=',$auditoria4_numero_fraccionado)->get();
                return ($auditoria4_por_numero_fraccionado);
            break;


            case 'auditoriausuarioscreados':
            $respuestadeintentodeempezarenlaapp=empieza::where('creado_por','!=',null)->get();
            return($respuestadeintentodeempezarenlaapp);
            break;

            case 'auditoriausuariosmodificados':
            $respuestadeintentodeempezarenlaapp=empieza::where('modificado_por','!=',null)->get();
            return($respuestadeintentodeempezarenlaapp);
            break;

            case 'auditoriausuariosdesactivadosactivados':
            $respuestadeintentodeempezarenlaapp=empieza::where('activado_o_desactivado_por','!=',null)->get();
            return($respuestadeintentodeempezarenlaapp);
            break;

            case 'cambiodecarreteachipa':
                $cambiodecarreteachipa=solicitudfraccionamiento::where('cambiado','=','si')->get();
                return ($cambiodecarreteachipa);
            break;

            case 'auditoriaingresomaterial':
                $obteneringresomaterialnobloqueados=ingresomaterial::where('descripcion','!=','null')->where('bloqueado','=','no')->get();
                return ($obteneringresomaterialnobloqueados);
            break;

            case 'auditoriabloqueoingresomaterial':
                $auditoriabloqueoingresomaterial=ingresomaterial::where('descripcion','!=','null')->where('bloqueado','=','si')->get();
                return ($auditoriabloqueoingresomaterial);
            break;

            case 'auditoriaentregas':
                $auditoriaentregas=solicitudfraccionamiento::where('estado','=','Entregado')->get();
                return ($auditoriaentregas);
            break;


            case 'novedadesenentrega':
                $auditoriaentregas=solicitudfraccionamiento::where('estado','=','Entregado')->where('tipo_novedad','!=','ninguna')->get();
                return ($auditoriaentregas);
            break;


            case 'auditoriaconsultartodosfraccionados':
                $auditoriaconsultartodosfraccionados=solicitudfraccionamiento::where('bloqueado','=','no')->where('fraccionado','=','si')->get();
                return ($auditoriaconsultartodosfraccionados);
            break;


            case 'auditoriaconsultarfraccionamientosdeuncarrete':
                $id_material=$data->id_material;
                $auditoriaconsultartodosfraccionados=solicitudfraccionamiento::where('id_material','=',$id_material)->where('bloqueado','=','no')->where('fraccionado','=','si')->get();
                return ($auditoriaconsultartodosfraccionados);
            break;

    
    }






    // if($data->nombre_solicitud=='prueba')
    // {
    //     $prueba = prueba::where('id_de_pruebas','=','1')->first();
    //     return ($prueba);
    // }



    }


}
