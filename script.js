const Wasps = [
    {name: "QueenHP", HP: 100, HPMax: 100, deduction: 8},
    {name: "WorkerHP1", HP: 75, HPMax: 75, deduction: 10},
    {name: "WorkerHP2", HP: 75, HPMax: 75, deduction: 10 },
    {name: "WorkerHP3", HP: 75, HPMax: 75, deduction: 10 },
    {name: "WorkerHP4", HP: 75, HPMax: 75, deduction: 10 },
    {name: "WorkerHP5", HP: 75, HPMax: 75, deduction: 10 },
    {name: "DroneHP1", HP: 50, HPMax: 50, deduction: 12 },
    {name: "DroneHP2", HP: 50, HPMax: 50, deduction: 12 },
    {name: "DroneHP3", HP: 50, HPMax: 50, deduction: 12 },
    {name: "DroneHP4", HP: 50, HPMax: 50, deduction: 12 },
    {name: "DroneHP5", HP: 50, HPMax: 50, deduction: 12 },
    {name: "DroneHP6", HP: 50, HPMax: 50, deduction: 12 },
    {name: "DroneHP7", HP: 50, HPMax: 50, deduction: 12 },
    {name: "DroneHP8", HP: 50, HPMax: 50, deduction: 12 },
]

Queen = document.getElementById("QueenHP");
Queen.innerHTML = Wasps[0].HP + "/100 HP";

WorkerHP1 = document.getElementById("WorkerHP1");
WorkerHP1.innerHTML = Wasps[1].HP + "/75 HP";

WorkerHP2 = document.getElementById("WorkerHP2");
WorkerHP2.innerHTML = Wasps[2].HP + "/75 HP";

WorkerHP3 = document.getElementById("WorkerHP3");
WorkerHP3.innerHTML = Wasps[3].HP + "/75 HP";

WorkerHP4 = document.getElementById("WorkerHP4");
WorkerHP4.innerHTML = Wasps[4].HP + "/75 HP";

WorkerHP5 = document.getElementById("WorkerHP5");
WorkerHP5.innerHTML = Wasps[5].HP + "/75 HP";

DroneHP1 = document.getElementById("DroneHP1");
DroneHP1.innerHTML = Wasps[6].HP + "/50 HP";

DroneHP2 = document.getElementById("DroneHP2");
DroneHP2.innerHTML = Wasps[7].HP + "/50 HP";

DroneHP3 = document.getElementById("DroneHP3");
DroneHP3.innerHTML = Wasps[8].HP + "/50 HP";

DroneHP4 = document.getElementById("DroneHP4");
DroneHP4.innerHTML = Wasps[9].HP + "/50 HP";

DroneHP5 = document.getElementById("DroneHP5");
DroneHP5.innerHTML = Wasps[10].HP + "/50 HP";

DroneHP6 = document.getElementById("DroneHP6");
DroneHP6.innerHTML = Wasps[11].HP + "/50 HP";

DroneHP7 = document.getElementById("DroneHP7");
DroneHP7.innerHTML = Wasps[12].HP + "/50 HP";

DroneHP8 = document.getElementById("DroneHP8");
DroneHP8.innerHTML = Wasps[13].HP + "/50 HP";

function damage() {

    //Vintage Doom Pistol sound. loading it first allows for clicking the button like crazy
    let pistol = document.getElementById("pistol");
    pistol.load();
    pistol.play();

    //find a random wasp in the Wasps array
    let randomWasp = Wasps[Math.floor(Math.random() * Wasps.length)];
    
    //deduct the damage from the wasp's hp pool and place it in a variable
    let NewWaspHP = randomWasp.HP - randomWasp.deduction;
    
    //find the corresponding wasp dom node
    let getWasp = document.getElementById(randomWasp.name);

    //write the new hit points in the paragraph
    getWasp.innerHTML = NewWaspHP + "/" + randomWasp.HPMax + " HP";
    
    //Visual indicator to know how bad a wasp is doing, if hurt yellow bg, else close to death red bg
    if (randomWasp.HP <= 25 ) {
        getWasp.style.backgroundColor = "red";        
    } else if(randomWasp.HP <= 40) {
    getWasp.style.backgroundColor = "yellow";
    }

    //setting the new value in the array
    randomWasp.HP = NewWaspHP;

    //when a wasp hits 0 hit points, display "DEAD" and remove from array
    if (randomWasp.HP <= 0) {
        getWasp.innerHTML = "DEAD";
        let death = document.getElementById("death");
        death.load();
        death.play();
        //find index of dead wasp
        let WaspIndex = Wasps.indexOf(randomWasp);
        //remove from array
        Wasps.splice(WaspIndex, 1);
    }

    //Winning conditions. if no more wasps in array, end of game. if queen is dead, kill all other wasps and end the game.
    if (Wasps.length == 0 ) {
        modalGameOver();
    } else if(randomWasp.name == "QueenHP" && randomWasp.HP <= 0) {
        Wasps.forEach(element => {
            element.HP = 0;
            wasp = document.getElementById(element.name);
            wasp.style.backgroundColor = "red";
            wasp.innerHTML = "DEAD";
            modalGameOver();
        });
    }
}

function modalGameOver() {
    // Get the modal
    let modal = document.getElementById("myModal");
    // Get the button that opens the modal
    let btn = document.getElementById("myButton");
    modal.style.display = "block";
}
