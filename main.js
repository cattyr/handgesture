https://teachablemachine.withgoogle.com/models/7KaBlKIfF/

var prediction1=""
var prediction2=""

Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
});

camera= document.getElementById("camera");
webcam.attach("#camera");

function snap(){
Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML='<img id="captured_image"src = " '+data_uri+'"/>';
})
}
  
console.log('ml5 version:', ml5.version);

classifier = mls.imageClassifier('https://teachablemachine.withgoogle.com/models/7KaBlKIfF/model.json',modelLoaded)

function modelLoaded(){
    console.log('Model Loaded!');
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data_1="The first prediction is  "+prediction1;
    speak_data_2="The second prediction is  "+prediction2;
    var utterThis= new SpeechSynthesisUtterance(speak_data_1 + speak_data_2)
        synth.speak(utterThis);
}
