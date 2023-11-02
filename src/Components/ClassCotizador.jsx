const cotizo = ()=> {
    btnCotizar.innerHTML = loader()
    setTimeout(() => {
     const coti = new Cotizador(costoM2, selectPropiedad.value, selectUbicacion.value, inputMetros2.value)
          valorPoliza.innerText = coti.cotizarPoliza()
          alerta('', 'Cotización realizada con éxito.', 'success')
          btnEnviar.classList.remove("ocultar")   
          btnCotizar.innerText = "cotizar"        
    }, 2500)
}

const realizarCotizacion = () => datosCompletos() ? cotizo() : alerta('', 'Debes completar todos los datos en pantalla..', 'warning')
