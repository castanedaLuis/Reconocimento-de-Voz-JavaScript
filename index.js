
const reconocimiento = new webkitSpeechRecognition ();

//lenguaje
reconocimiento.lang = 'es-ES';

//le decimos que quemos escuchar continuo
reconocimiento.continuous = true;

//añadimos evento
reconocimiento.onresult = event =>{
    //iteramos todo
    for(const result of event.results){
        console.log(result[0].transcript)
    }
}

reconocimiento.start()