//localstorage

function storage_name(name) {
    localStorage.setItem("name", name);

    return name
}

function remember_(value) {
    //check
    let remember;
    if (localStorage.getItem('remember') === null) {
        remember = [];
    } else {
        remember = JSON.parse(localStorage.getItem('remember'));
    }
    remember.push(value);
    localStorage.setItem('remember', JSON.stringify(remember));
}


//getting memory from localstorage

function getRem(msg) {
    let remember;
    var strg = localStorage.getItem('remember')

    if (strg.length != 2) {
        remember = JSON.parse(localStorage.getItem('remember'));
        bot = "you said these to remember"
        say(bot)
        bot = ""
        remember.forEach(function (value) {
            say(value)
            bot = bot + "<br>" + value
        })
        append(msg, bot)
        stop()
    } else {
        remember = [];
        bot = "you said nothing to remember"
        say(bot)
        append(msg, bot)
    }
}


//deleting

function removeRem(val) {
    let rem
    var strg = localStorage.getItem('remember')
    if (strg.length === 2) {
        rem = [];
        bot = `you didnt said me to remember ${val}`
        say(bot)
        append(msg, bot)
    } else {
        rem = JSON.parse(localStorage.getItem('remember'));
    }
    const todoIndex = rem.indexOf(val)
    removed = rem.splice(rem.indexOf(todoIndex), 1);
    localStorage.setItem('remember', JSON.stringify(rem));
    bot = removed + " is cleared successfully"
    say(bot)
    append(msg, bot)
}

function removeRemAll() {
    var strg = localStorage.getItem('remember')
    if (strg.length === 2) {
        bot = "there is nothing to clear"
        say(bot)
        remember = [];
        append(msg, bot)
    } else {
        rem = JSON.parse(localStorage.getItem('remember'));
        rem = [];
        localStorage.setItem('remember', JSON.stringify(rem))
        bot = "memory is cleared successfully"
        say(bot)
        append(msg, bot)
    }
}


//functions

function say(msg) {
    const speech = new SpeechSynthesisUtterance()
    speech.text = msg;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech)
}


function message_fetch() {
    var text = document.getElementById('name')

    if (text.value.length > 0) {
        msg = text.value.toLowerCase();
        msg = msg.trim()
        text.value = ""

        data(msg)

    } else {
        alert('Please fill the blanks')
    }
}


//speech to text

function speech() {

    try {
        const sr = new webkitSpeechRecognition()
        sr.onresult = function (event) {
        const message_before = event.resultIndex;
        const message = event.results[message_before][0].transcript

        var text = document.getElementById('name')
        text.value = message;

        }
    } catch {
        try {
            const sr = new SpeechRecognition()
            sr.onresult = function (event) {
        const message_before = event.resultIndex;
        const message = event.results[message_before][0].transcript

        var text = document.getElementById('name')
        text.value = message;

    }
        }
        catch {
            alert("Speech recognition is not supported in your browser")
            var catch_btn = document.getElementById('catch_btn')
            catch_btn.style.display = "none"
        }
    }

    sr.onresult = function (event) {
        const message_before = event.resultIndex;
        const message = event.results[message_before][0].transcript

        var text = document.getElementById('name')
        text.value = message;

    }

    sr.start()
}

//arrays/////////////////////////////////////////////////////////////////
//greetings-----------------

const greetings = ['hello', 'hai', 'hey', 'hi ']
const greet = ['hello my friend', 'hey buddy', 'hi', 'hello', 'hey']

const fine = ['how are you', 'how do you do', 'how you doing']
const say_fine = ['iam doing fantastic', 'iam fine']

const g_t = ['good morning', 'good afternoon', 'good evening', 'good night']
const say_gt = ['have a good day', 'have a nice day']

//greetings-------------------

//date------------------

const date = new Date()
const date_ask = ['what day is today', 'what is the date', 'date', 'which day', 'what day', 'what date', "show date",
    "show me the date", "show the date", "show date", "what is the date today"
]
const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]
const date_day_name = days[date.getDay()]
var date_dayNum = date.getDate() + " " + date.getMonth() + " " + date.getFullYear() + " "
const date_say = date_dayNum + date_day_name

//--date----------------

//personal

const dev_ask = ['who made you', 'your dev', 'your friend', 'made you']
const dev_say = ['fadhil is my developer']

//fun 

const fun_messages = ['corona', 'covid', 'sleep', 'food', 'place', 'house', 'members', 'job', 'siblings']
const fun_reply = ['its my personal stuff', 'dont trust anyone, this is a famous word from my boss, i cant say it you',
    'dont ask me this again, my name is ubot, i dont have family, i just have a friend its you and my developer fadhil, i cact do nothing except chatting you'
]

//music

const music_ask = ['open music', 'sing a song', 'music', 'play music']
const musics = ['https://bensound.com/bensound-music/bensound-tomorrow', './assets/music/a', './assets/music/b', './assets/music/c']

const stop_music_ask = ['stop music', 'stop song', 'pause song', 'pause music']

//camera
const camera_ask = ['open camera', 'camera', 'single', 'why iam so sad']

//localstoarege

const storage_ask = ['memory', 'what i said you to remember']
const storage_remove = ['clear storage', 'clear memory', 'clear remember']

//--arrays----------------------------------------------------------------------------


//checking functions

//stop saying
function stop() {
    window.speechSynthesisInstance.cancel();
}

//appending message

function append(user, bot) {
    const div = document.getElementById('one')

    var user_span = document.getElementById('user')
    var admin_span = document.getElementById('admin')

    user_span.innerText = user;
    admin_span.innerHTML = bot;

    div.style.display = "block"
    stop()
}

//checking item in arrays

function check_1(req, res) {
    req.forEach((item) => {
        if (msg.includes(item)) {
            bot = res
            say(bot)
            append(msg, bot)
            stop()
        }
    })
}

function check(req, res) {
    req.forEach((item) => {
        if (msg.includes(item)) {
            bot = res[Math.floor(Math.random() * res.length)]
            say(bot)
            append(msg, bot)
            stop()
        }
    })
}

//name function

//function for audio
function check_2(req) {
    req.forEach((item) => {
        if (msg.includes(item)) {
            var aud = document.getElementById('audio')
            aud.innerHTML = "<source src=''>";
            aud.pause()
            src = musics[Math.floor(Math.random() * musics.length)]
            aud.innerHTML = `<source src='${src}.mp3'>`
            aud.play()
            aud.style.display = "block";
            bot = "song"
            append(msg, bot)
            stop()
        }
    })
}

//function for camera
async function check_6(req) {
    await req.forEach((item) => {
        if (msg.includes(item)) {
            var aud = document.getElementById('audio')
            aud.innerHTML = ""
            aud.style.display = "none"

            var vid = document.getElementById('vid')
            let stream = null

            async function check_6_() {
                try {
                    stream = await navigator.mediaDevices.getUserMedia({ audio: false, video: true })
                } catch {
                    stream = null;
                }

                if (stream) {
                    vid.srcObject = stream;
                    bot = "look at your self"
                    say(bot)
                    vid.style.display = "block"
                    append(msg, bot)
                } else {
                    bot = "iam sorry i couldnt access your camera"
                    say(bot)
                    append(msg, bot)
                }
            }
            check_6_()

        }
    })
}

//function for localstorage
function check_4(req) {
    req.forEach((item) => {
        if (msg.includes(item)) {
            getRem(msg)
            stop()
        }

    })

}

function check_5(req) {
    req.forEach((item) => {
        if (msg.includes(item)) {
            removeRemAll()
            stop()
        }

    })
}

function check_6__(req) {
    req.forEach((item) => {
        if (msg.includes(item)) {
            return 1
        } else {
            return 0
        }

    })
}

function translate() {

    var list = document.getElementById('lang')
    var language_code = list.options[list.selectedIndex].value;

    var inp = document.getElementById('tarns').value
    var text = encodeURIComponent(inp)

    //var url = "https://translate.google.com/translate_tta?ie=UTF-8&q=" + text + "$tl=en";
    var url = `https://translate.google.com/#view=home&op=translate&sl=auto&tl=${language_code}&text=${text}`

    window.location.href = url
    bot = "translate"
    var to_hide = document.getElementById('to_hide_tr')
    to_hide.style.display = "block"
    to_show = document.getElementById('to_show_tr')
    to_show.style.display = "none"
    append(msg, bot)
}

//sub functions

function google(search) {
    window.open(`http://google.com/search?q=${search}`);
}


function data(msg) {

    //say command

    if (msg.includes("say")) {
        msg_2 = msg.slice(4)
        say(msg_2)
        append(msg, msg_2)
    }
    //storage
    if (msg.includes("remember")) {
        rem = msg.slice(9)
        remember_(rem)
        bot = rem + " saved in localstorage successfully"
        say(bot)
        append(msg, bot)
        stop()

    }
    if (msg.includes(check_5(storage_remove))) {

    }
    if (msg.includes(check_4(storage_ask))) {

    }
    if (msg.includes("remove")) {
        rm = msg.slice(7)
        removeRem(rm)
    }
    //greetings

    if (msg.includes(check(greetings, greet))) {

    }
    if (msg.includes(check(fine, say_fine))) {

    }
    if (msg.includes(check(g_t, say_gt))) {

    }
    if (msg.includes(check(dev_ask, dev_say))) {

    }
    if (msg.includes(check_1(date_ask, date_say))) {

    }
    if (msg.includes(check(fun_messages, fun_reply))) {

    }
    if (msg.includes("my name is ")) {
        msg_name = msg.slice(11)
        bot = storage_name(msg_name)
        say(bot)
        append(msg, bot)
        stop()
    }

    //music and camera

    if (msg.includes(check_2(music_ask))) {
    }
    if (msg.includes(check_6(camera_ask))) {

    }

    //calculation
    if (msg.includes("calc")) {
        calculation = msg.slice(5)

        try {
            answer = eval(calculation)
            bot = `${calculation} is ${answer}`

        } catch {
            bot = "its not a correct calclation"
        }

        if (answer) {
            say(bot)
            append(msg, bot)
        } else {
            say(bot)
            append(msg, bot)
        }
    }
    if (msg.includes("translate")) {
        var to_hide = document.getElementById('to_hide_tr')
        to_hide.style.display = "none"
        to_show = document.getElementById('to_show_tr')
        to_show.style.display = "block"
    }
    //else
    else {
        if (msg.includes("camera")) {
            var a = check_6__(camera_ask)

            if (a === 1) {
                check_6(camera_ask)
            }
        }
        if (msg.includes("single")) {
            var a = check_6__(camera_ask)

            if (a === 1) {
                check_6(camera_ask)
            }
        }
        else {
            bot = say('do you need the answer from web')
            opt = confirm('Do you need answer from web')

            if (opt) {
                google(msg)
                bot = "answer from web"
                append(msg, bot)

            } else {
                bot = say("Iam sorry i don't know about it")
                append(msg, bot)
            }
        }


    }
}

function greet_first() {
    name = localStorage.getItem("name")

    if (name) {
        say("Hello " + name + ", my name is ubot, how can i help you")
    } else {
        say("hello my name is ubot, how can i help you")
    }
}

greet_first()
