const submit = document.getElementById("submit");


document.querySelector('input').value = window.localStorage.getItem('lastConnected');

function containerError(input) {
    const container = input.parentElement;
    container.className = "container error";
}

function containerSuccess() {
    const container = input.parentElement;
    container.className = "container success";
}

var btn = document.querySelector('button');

btn.addEventListener('click', () => {
    const val = document.querySelector('input').value;
    
    getAudioFromHost(val);
    window.localStorage.setItem('lastConnected', val);
    document.getElementById('code-view').style.display = "none";
    document.getElementById('listen-view').style.display = "block";
})

const getAudioFromHost = (hostID) => {
    var peer = new Peer({ host: 'localhost', path: '/peerjs', port: 8080 });
    peer.on('open', function (id) {
        console.log('open~~~')
        peer.on('error', console.log)

        var conn = peer.connect(hostID);
        conn.on('error', console.log)
        conn.on('connection', console.log)
        conn.on('call', function (call) {
            call.answer(window.localStream);
        });

        peer.on('call', function (call) {
            call.answer();
            call.on('stream', (stream) => {
                const audio = document.querySelector('audio');
                audio.srcObject = stream;
                audio.onloadedmetadata = function (e) {
                    console.log('now playing the audio');
                    audio.play();
                }
            })
        });
    });
}
