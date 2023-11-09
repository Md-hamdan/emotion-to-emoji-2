//https://teachablemachine.withgoogle.com/models/ZRUAEjDZb/

Webcam.set({
    width:350,
    height:300,
    Image_format:'png',
    png_quality:90
});

camera=document.getElementById("camera");

Webcam.attach(camera);

function take_snapshot() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
    });
}

console.log("ml5 version:",ml5.version);

classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/ZRUAEjDZb/model.json',model_loaded);

function model_loaded() {
    console.log("model is loaaded");
}

function speak() {
    synth=window.speechSynthesis;
    speak_data1="The first prediction is "+prediction_1;
    speak_data2="And the second prediction is "+prediction_2;
    utterThis=new SpeechSynthesisUtterance(speak_data1+speak_data2);
    synth.speak(utterThis);
}