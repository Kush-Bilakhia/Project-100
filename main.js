var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}


recognition.onresult = function(event) {
    
    console.log(event);

    var Content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = Content;
    console.log(Content);

   
    if(Content == "Take My Selfie")
    {
        console.log("Taking Selfie");
        speak();
    }
    
}

function speak(){
    var synth = window.speechSynthesis;

    speak_data = document.getElementById("textbox").value;

    var utterThis = new SpeechSynthesisisUtterance(speak_data);

    synth.speak(utterThis);

    Webcam.attach(camera);

    setTimeout(function()  {
        img_id = "selfie1";
        take_snapshot();
        speak_data = "Taking Your Selfie in 10 seconds";
        var utterThis = new SpeechSynthesisisUtterance(speak_data);
        synth.speak(utterThis);
    },5000);
}

Webcam.set({
    width:360,
    height:250,
    image_format : 'png',
    png_quality:90
});
camera = document.getElementById("camera");

function take_snapshot()
{
    console.log(img_id);

    Webcam.snap(function(data_uri) {
        if(img_id == "selfie1"){
            document.getElementById("result").innerHTML= '<img id="selfie_image" src="'+data_uri+'">';
        }
        if(img_id == "selfie2"){
            document.getElementById("result").innerHTML= '<img id="selfie_image" src="'+data_uri+'">';
        }
        if(img_id == "selfie3"){
            document.getElementById("result").innerHTML= '<img id="selfie_image" src="'+data_uri+'">';
        }
      
    });
}


function save()
{
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src ;
    link.href = image;
    link.click();
}



