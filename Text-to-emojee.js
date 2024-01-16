var clutter = ""
var clutter2 = ""
// localStorage.clear()
function encryption(){
    document.getElementById("encryption-btn").addEventListener("click",()=>{
        clutter= ""
        let textMsg= document.getElementById("text-msg").value
        // console.log(textMsg)
        let password= document.getElementById("password").value
        // console.log(password)
        const str = textMsg.split("")
        console.log(str)
        str.forEach(element => {
            clutter += `&#128${element.charCodeAt()}`
        });
        // console.log(clutter)
        document.getElementById("result").innerHTML = clutter
        var dataarr= []

        if(JSON.parse(localStorage.getItem('data1'))){
            dataarr = JSON.parse(localStorage.getItem('data1'))
            dataarr.push({"text":textMsg, "pass": password, "clutter": clutter})
        }else
        {
            dataarr = [{"text":textMsg, "pass": password, "clutter": clutter}]
        }
        
        // console.log(dataarr)
        localStorage.setItem('data1', JSON.stringify(dataarr))

    })
}
encryption();

function decryption(){
    document.querySelector("#decryption-btn").addEventListener("click",()=>{
        
        var input = document.querySelector("#emo-msg").value
        console.log(input)

        var passcode = document.getElementById("n-password").value
        // console.log(passcode)

        var user = JSON.parse(localStorage.getItem('data1'))

        var str2 = input.split("")
        console.log(str2)

        str2.forEach((element=>{
            clutter2 += `&#${element.codePointAt()}`
        }))
        // console.log(clutter2)

        var found;
        for(let i of user){
            console.log("i am here")
            if(i.clutter == clutter2){
                found = i
                console.log(i)
                
            }
            console.log(i)

        }
        console.log(found)
        if(found.clutter === clutter2){
            document.querySelector("#result").style.display = "block"
            document.querySelector("#result").innerHTML = found.text
        }else{
            document.querySelector("#result").innerHTML = "kuch to gadbad hai daya"
            
        }
        
    })
}
decryption()

function jump(){
    document.querySelector("#dec-btn").addEventListener("click",()=>{
        document.querySelector("#decrypt").style.display = "block"
        document.querySelector("#encrypt").style.display = "none"
        document.querySelector("#dec-btn").style.backgroundColor = "#7e7e7e"
        document.querySelector("#enc-btn").style.backgroundColor = "#3e3e3e"
        document.querySelector("#t-to-e i").style.transfrom = `rotateX(180deg)`
        document.getElementById("result").style.display = "none"
    })
    document.querySelector("#enc-btn").addEventListener("click",()=>{
        document.querySelector("#decrypt").style.display = "none"
        document.querySelector("#encrypt").style.display = "block"
        document.querySelector("#enc-btn").style.backgroundColor = "#7e7e7e"
        document.querySelector("#dec-btn").style.backgroundColor = "#3e3e3e"
        document.getElementById("result").style.display = "none"
    })
    document.getElementById("encryption-btn").addEventListener("click",()=>{
        document.getElementById("result").style.display = "block"
    })
}
jump();
