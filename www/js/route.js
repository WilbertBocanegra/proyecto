const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Personas = require('../databasemodel/profesor_administrador');
const Asignatura = require('../databasemodel/asignatura');
const Aula = require('../databasemodel/aula');
const Grado = require('../databasemodel/grado');
const Grupo = require('../databasemodel/grupo');
const Trimestre = require('../databasemodel/trimestre');
const Clases = require('../databasemodel/clases');
const Calificaciones = require('../databasemodel/calificaciones');
const Tiposangre = require('../databasemodel/sangre');
//ruta raiz
router.get('/', async(req,res)=>{
    //const tasks = await Task.find();
    //console.log(tasks);
    res.render('login'/*,{
        tasks
    }*/)
});
router.post('/iniciarsesion',async(req,res)=>{
var matricula = req.body.matricula;
var contraseña = req.body.contraseña;   
const query = await Personas.findOne({matricula:matricula, contraseña:contraseña},function(err,user){
    req.session.user_id=user._id
    req.session.nombre = user.nombre +' '+user.apaterno +' '+user.amaterno
    return user
    });
    res.send({
        "message":query
    })
});

//ruta get registro
router.get('/registrar/',(req,res)=>{
    res.render('registrar')
});

//ruta post registro
/*
router.post('/registrar',async(req,res)=>{
    console.log(req.body);
    const personas = new Personas(req.body);
    await personas.save();
    //res.redirect('/registrar/');
    res.send({
        "message":"El registro de guardó correctamente"
    })
});*/


//ruta get asignatura
router.get('/asignatura/',async(req,res)=>{
    const query = await Asignatura.find();
    res.render('asignatura',{
        query
    })
});
//eliminar asignatura
router.get('/eliminarasignatura/:id', async(req,res)=>{
    const {id}= req.params;
    await Asignatura.remove({_id:id})
   res.redirect('/asignatura/')
})
//ruta post asignatura
router.post('/asignatura',async(req,res)=>{
    console.log(req.body);
    const asignatura = new Asignatura(req.body);
    await asignatura.save();
    //res.redirect('/registrar/');
    res.send({
        "message":"La asignatura se guardó correctamente"
    })
});

//ruta get aula
router.get('/aula/', async(req,res)=>{
    const query = await Aula.find();
    res.render('aula',{
        query,
    })
});
//eliminar aula
router.get('/eliminaraula/:id', async(req,res)=>{
    const {id}= req.params;
    await Aula.remove({_id:id})
   res.redirect('/aula/')
})
//ruta post aula
router.post('/aula',async(req,res)=>{
    console.log(req.body);
    const aula = new Aula(req.body);
    await aula.save();
    //res.redirect('/registrar/');
    res.send({
        "message":"El aula se guardó correctamente"
    })
});

//ruta get grado
router.get('/grado/', async(req,res)=>{
    const query = await Grado.find();
    res.render('grado',{
        query
    });
});
//eliminar grado
router.get('/eliminargrado/:id', async(req,res)=>{
    const {id}= req.params;
    await Grado.remove({_id:id})
   res.redirect('/grado/')
})
//ruta post grado
router.post('/grado',async(req,res)=>{
    console.log(req.body);
    const grado = new Grado(req.body);
    await grado.save();
    //res.redirect('/registrar/');
    res.send({
        "message":"El grado se guardó correctamente"
    })
});

//ruta get grupo
router.get('/grupo/',async(req,res)=>{
    const query = await Grupo.find();
    res.render('grupo',{
        query
    });
});
//eliminar grupo
router.get('/eliminargrupo/:id', async(req,res)=>{
    const {id}= req.params;
    await Grupo.remove({_id:id})
   res.redirect('/grupo/')
})
//ruta post grupo
router.post('/grupo',async(req,res)=>{
    console.log(req.body);
    const grupo = new Grupo(req.body);
    await grupo.save();
    //res.redirect('/registrar/');
    res.send({
        "message":"El grupo se guardó correctamente"
    })
});

//ruta get trimestre
router.get('/trimestre/', async(req,res)=>{
    const query = await Trimestre.find();
    res.render('trimestre',{
        query
    });
});
//eliminar trimestre
router.get('/eliminartrimestre/:id', async(req,res)=>{
    const {id}= req.params;
    await Trimestre.remove({_id:id})
   res.redirect('/trimestre/')
})
//ruta post trimestre
router.post('/trimestre',async(req,res)=>{
    console.log(req.body);
    const trimestre = new Trimestre(req.body);
    await trimestre.save();
    //res.redirect('/registrar/');
    res.send({
        "message":"El trimestre se guardó correctamente"
    })
});


//ruta get profesor/administrador
router.get('/profesor_administrador/', async(req,res)=>{
    const tiposangre = await Tiposangre.find();
    res.render('profesor_administrador',{
        tiposangre
    });
});

//ruta post profesor/administrador
router.post('/profesor_administrador',async(req,res)=>{
    console.log(req.body);
    const profesoradministrador = new Personas(req.body);
    await profesoradministrador.save();
    //res.redirect('/registrar/');
    res.send({
        "message":"El registro se guardó correctamente"
    })
});

//ruta get alumnos
router.get('/alumnos/', async(req,res)=>{
    const tiposangre = await Tiposangre.find();
    const grado = await Grado.find();
    const grupo  = await Grupo.find();
    res.render('alumnos',{
        tiposangre,
        grado,
        grupo
    });
});

//ruta postalumnos
router.post('/alumnos',async(req,res)=>{
    console.log(req.body);
    const alumno = new Personas(req.body);
    await alumno.save();
    //res.redirect('/registrar/');
    res.send({
        "message":"El registro se guardó correctamente"
    })
});



//ruta get clases
router.get('/clases/',async(req,res)=>{
    
    const query = await Clases.find();
    const asignatura= await Asignatura.find();
    const profesor = await Personas.find( {$where: function() { return this.tipopersona == "maestro" }});
    const alumno = await Personas.find( {$where: function() { return this.tipopersona == "alumno" }});
    const grupo = await Grupo.find();
    const grado = await Grado.find();
     
    res.render('clases',{
        query,
        asignatura,
        profesor,
        grupo,
        grado,
        alumno
    });
});

//eliminar clases
router.get('/eliminarclases/:id', async(req,res)=>{
    const {id}= req.params;
    await Clases.remove({_id:id})
   res.redirect('/clases/');
})
//ruta clases
router.post('/clases',(req,res)=>{
    console.log(req.body);
    const clases = new Clases(req.body);
    mongoose.connect('mongodb://localhost/secundaria',function(err,db){
      db.collection('clases').insertOne({
       nombre:req.body.nombre,
       profesor:req.body.profesor,
       asignatura:req.body.asignatura,
       grupo:req.body.grupo,
       grado:req.body.grado,
       turno:req.body.turno,
       aula:req.body.aula,
       hora:req.body.hora,
       alumnos:{nombre_alumno:req.body.nombre_alumno},
       
   });
    })
    //res.redirect('/registrar/');

    res.send({
        "message":"La clase se guardó correctamente"
    })
});


//ruta get clases
router.get('/calificaciones/', async(req,res)=>{
    const query = await Calificaciones.find();
    console.log(query)
    res.render('calificaciones',{
        query
    });
});

//ruta clases
router.post('/calificaciones',async(req,res)=>{
    console.log(req.body);
    const clases = new Clases(req.body);
    await clases.save();
    //res.redirect('/registrar/');
    res.send({
        "message":"La clase se guardó correctamente"
    })
});
//ruta get vistaa alumnos
router.get('/vista_alumnos/',(req,res)=>{
    res.render('vista_alumno');
});

//ruta get vistaa maestros
router.get('/vista_maestros/',(req,res)=>{
    res.render('vista_maestro');
    console.log(req.session.user_id)
});
//ruta get vistaa administrador
router.get('/vista_administrador/',(req,res)=>{
    res.render('vista_administrador');
});

//ruta get perfil alumno
router.get('/perfil_alumno/',async(req,res)=>{
    var sesion=req.session.user_id;
    const query= await Personas.find({_id:sesion});
    res.render('perfil_alumno',{
        query
    });
});
//ruta get horario alumno
router.get('/horarios_alumnos/',async(req,res)=>{
    var sesion=req.session.user_id;
    var nombrecompleto=req.session.nombre;
    const query= await Clases.find({alumno:nombrecompleto});
    console.log(query)
    res.render('horario_alumno',{
        query
    });
});
//ruta get calificaciones alumno
router.get('/calificaciones_alumnos/',async(req,res)=>{
    res.render('calificaciones_alumnos');

});
//ruta get calificaciones maestro
router.get('/calificaciones_maestro/',async(req,res)=>{
   
    var sesion=req.session.user_id;
    var nombrecompleto=req.session.nombre;
    console.log(nombrecompleto)
    const query= await Clases.find({profesor:nombrecompleto});
    console.log(query)
    res.render('calificaciones_maestro',{
        query
    });

});
//ruta get horario maestro
router.get('/horario_maestros/',async(req,res)=>{
    var sesion=req.session.user_id;
    var nombrecompleto=req.session.nombre;
    console.log(nombrecompleto)
    const query= await Clases.find({profesor:nombrecompleto});
    console.log(query)
    res.render('horarios_maestro',{
        query
    });
});
//ruta get perfil maestro
router.get('/perfil_maestro/',async(req,res)=>{
    var sesion=req.session.user_id;
    const query= await Personas.find({_id:sesion});
    res.render('perfil_maestros',{
        query
    });

});
router.post('/add', async(req, res) =>{
   const task = new Task(req.body);
   await task.save();
   res.redirect('/'); 
});

router.get('/turn/:id', async(req,res)=>{
    const {id}= req.params;
    const task = await Task.findById(id);
     task.status =!task.status;
      await task.save();
    res.redirect('/');
})

router.get('/edit/:id',async(req,res)=>{
    const {id}= req.params;
    const task = await Task.findById(id);
    res.render('edit',{
        task
    });
})
router.post('/edit/:id',async(req,res)=>{
    const {id}= req.params;
    await Task.update({_id:id},req.body);
    res.redirect('/');

})
router.get('/delete/:id', async(req,res)=>{
    const {id}= req.params;
    await Task.remove({_id:id})
    res.redirect('/');
})




router.get('/calificacion_maestro/:id', async(req,res)=>{
    const {id}= req.params;
    const query = await Clases.findById({"_id":id});
     query.alumnos.asistencia =!query.alumnos.asistencia;
      await query.save();
    res.redirect('/calificaciones_maestro/');
})


module.exports = router;