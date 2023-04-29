const videoForm = document.getElementById('videoForm');
const minutesPerVideo = document.getElementById('minutesPerVideo');
const addVideoButton = document.getElementById('addVideoButton');
const playbackSpeed = document.getElementById('playbackSpeed');
const calculateButton = document.getElementById('calculateButton');
const totalTime = document.getElementById('totalTime');
const totalMinutes = document.getElementById('totalMinutes');
let total = 0;

addVideoButton.addEventListener('click', () => {
    const videoTime = minutesPerVideo.value.trim();
    if (videoTime) {
        try {
            const time = parseFloat(videoTime);
            if (isNaN(time)) {
                throw new Error();
            }
            total += time;
        } catch (error) {
            alert("Invalid Input: Expected a number, please try again");
        }
    }
    minutesPerVideo.value = '';
    totalMinutes.textContent = 'Total Playtime (Min): ' +  total.toFixed(2);
});

calculateButton.addEventListener('click', () => {

    var speed = parseFloat(playbackSpeed.value);

    if(isNaN(speed) || speed == 0){
        speed = 1;
    }
    
    const totalHours = (((total * 60) / speed)) / 60;
    //total time in seconds print("Total Minute(s): {} ".format(int(s)+round((s-int(s)),5)))
    var s = totalHours/60
    var hours = Math.floor(s)
    var minutes = Math.floor((s - hours) * 60);
    var seconds =  Math.floor(((s - hours) * 60 - minutes)*100)
    if(seconds === 60){
        seconds = 0;
        minutes +=1;
    }
    if(seconds >= 61){
        var diff = Math.floor(seconds/60);
        seconds-=60;
        minutes += 1*diff;
    }
    if(minutes >= 60){
        var mindiff = Math.floor(minutes/60);
        minutes -= 60;
        hours += 1*mindiff;
    }
    //const seconds = Math.round((((s - hours) * 60) - minutes) * 60);
    //totalTime.style.display = "block";
    totalTime.textContent = `${hours} ${hours === 1 ? 'Hour' : 'Hours'} -- ${minutes} ${minutes === 1 ? 'Minute' : 'Minutes'} -- ${seconds} ${seconds === 1 ? 'Second' : 'Seconds'}`;
});
