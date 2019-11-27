const express = require('express');
const router = express.Router();

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
    res.render('inicio'/*,{
        tasks
    }*/)
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
router.get('/asignatura/',(req,res)=>{
    res.render('asignatura')
});

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
router.get('/aula/',(req,res)=>{
    res.render('aula')
});

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
router.get('/grado/',(req,res)=>{
    res.render('grado')
});

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
router.get('/grupo/',(req,res)=>{
    res.render('grupo')
});

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
router.get('/trimestre/',(req,res)=>{
    res.render('trimestre')
});

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
    const query= Tiposangre.find();
    res.render('profesor_administrador',{
        query
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
router.get('/alumnos/',(req,res)=>{
    res.render('alumnos');
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
router.get('/clases/',(req,res)=>{
    res.render('clases');
});

//ruta clases
router.post('/clases',async(req,res)=>{
    console.log(req.body);
    const clases = new Clases(req.body);
    await clases.save();
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

router.post('/iniciarsesion',async(req,res)=>{
    res.send('recibido')
})
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
module.exports = router;