const submit = document.getElementById("submit");

function containerError(input) {
    const container = input.parentElement;
    container.className = "container error";
}

function containerSuccess() {
    const container = input.parentElement;
    container.className = "container success";
}



var createTimer = (initTime) => {
    let start = Date.now();
    const intTime = parseFloat(initTime)
    const getTime = () => Date.now() - start;

    return {
        getTime: () => ((getTime() / 1000) + intTime).toString(),
        setLatency: (secs) => {

        }
    }
}
// var timer;
// var latTimer;

var btn = document.querySelector('button');
// var vid = document.querySelector('video');
// btn.addEventListener('click', () => {
//     // const t = timer.getTime()
//     // console.log(t)
//     // vid.currentTime = t;
//     // vid.play();
//     ;
// })
setTimeout(() => getAudioFromHost('090909'), 100)

// latTimer = createTimer(0);

///// TESTING AREA ///////

const getAudioFromHost = (hostID) => {
    var peer = new Peer({ host: 'localhost', path: '/peerjs', port: 8080, debug: 0 });
    peer.on('open', function (id) {
        console.log('open~~~')
        peer.on('error', console.log)

        var conn = peer.connect(hostID); /// host id generated.. replace with what input has avalibel
        conn.on('error', console.log)
        conn.on('connection', console.log)
        conn.on('call', function (call) {
            call.answer(window.localStream);
        });

        peer.on('call', function (call) {
            // Answer the call automatically (instead of prompting user) for demo purposes
            call.answer();
            call.on('stream', (stream) => {
                const audio = document.querySelector('audio');
                // debugger
                audio.srcObject = stream;
                audio.onloadedmetadata = function (e) {
                    console.log('now playing the audio');
                    audio.play();
                }
            })
        });
        conn.on('open', function () {
            // connected to peer!
        });
        console.log('wedwe')
    });
    peer.on('connection', () => {
        console.log('~~~connectiuoins')
    })
}
