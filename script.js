let btn = document.querySelector("#btn")
let content = document.querySelector("#content")
let voice = document.querySelector("#voice")

function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak_volume=1
    text_speak.lang="hi-GB"
    window.speechSynthesis.speak(text_speak)
    
}
function wishMe(){
    let day =new Date()
    let hours=day.getHours()
        if(hours>=0 && hours<12){
            speak("Good Morning Ashish ji")
        }else if(hours>=12 && hours<16){
            speak("Good Afternoon Ashish ji")
        }else{
            speak("Good Evening Ashish ji")
        }
}
window.addEventListener('load',()=>{
    wishMe()
})
let speachreco=window.SpeechRecognition || window.webkitSpeechRecognition
let reco=new speachreco()
reco.onresult=(event)=>{
    let currentIndex =event.resultIndex
    let transcript=event.results[currentIndex][0].transcript
    content.innerText=transcript
    takeCommand(transcript.toLowerCase())
}
btn.addEventListener("click",()=>{
    reco.start()
    btn.style.display="none"
    voice.style.display="block"
})
    function takeCommand(message){
        btn.style.display="flex"
        voice.style.display="none"
        if(message.includes("hello")||message.includes("hey")){
            speak("hello sir, what can i help you")
        }else if(message.includes("aapko kisne developed kiya hai")||message.includes("who made you")||message.includes("who developed you")){
            speak("mujhe developer ashish sir ne developed kiya hai")
        }else if(message.includes("open youtube")){
            speak("please opening youtube ")
            window.open("https://www.youtube.com/")
        }else if(message.includes("open instagram")){
            speak("please opening instagram")
            window.open("https://www.instagram.com/")
        }else if(message.includes("open facebook")){
            speak("please opening facebook")
            window.open("https://www.facebook.com/")
        }else if(message.includes("open linked")||message.includes("link in")){
            speak("please opening linked")
            window.open("https://www.linkedin.com/")
        }else if(message.includes("open github")){
            speak("please opening github")
            window.open("https://www.github.com/")
        }else if(message.includes("open calculator")){
            speak("please opening calculator")
            window.open("calculator://")
        }else if(message.includes("what is time")){
            let time=new Date().toLocaleDateString(undefined,{hour:"numeric",minute:"numeric"})
            speak(" time is " + time)
        }else if(message.includes("what is date")){
            let date=new Date().toLocaleDateString(undefined,{day:"numeric",month:"short",year:"numeric"})
            speak(" date is " + date)
            window.open("calculator://")
        }
        else if(message.includes("open whatsapp")){
            speak("please opening whatsapp")
            window.open("whatsapp://")
        }
        else{
           let text = "this is what i found on internet regarding"+message.replace("robo","")|| message.replace("robo","")
            speak(text)
            window.open(`https://www.google.com/search?q=${message.replace("robo","")}`,"_blank")
        }
    }
