function operacion(){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            const exito = true;
            if (exito) resolve ("Operación exitosa");
            else reject (new Error ("Hubo un error en la conexión"))
        },3000);
    });
}

operacion()
.then(res => console.log(res))
.catch(error=> console.error(error))
.finally(()=> console.log ('Operación completada'));