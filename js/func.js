import {getFaults, updateBMS, updateInverters} from "./network.js"

/**
 * Detects a fault and adds it to the faults list if detected.
 *
 * @returns {void} No return value.
 */
function detectFault() {
    /**
     * Gets the current fault status.
     *
     * @returns {Object} An object containing the detected fault (if any) and a boolean indicating whether a fault has been detected.
     */
    const faultStatus = getFaults();

    if (faultStatus.faultdetected) {
        const fault = document.createElement("li");
        fault.classList.add("fault");
        fault.innerText = faultStatus.fault;
        document.getElementById("faults").appendChild(fault);
    }
}


function updateBMS() {
    var BMSdata = updateBMS();

    // update the BMS details
    document.getElementById("BMSavgtemperature").innerText = BMSdata.avgtemperature;
    document.getElementById("BMScurrent").innerText = BMSdata.current;
    document.getElementById("BMSmaxtemperature").innerText = BMSdata.maxtemperature;
    document.getElementById("BMScapacity").innerText = BMSdata.capacity;
    document.getElementById("BMSvoltage").innerText = BMSdata.voltage;
}

function updateInverters() {
    var Invertersdata = updateInverters();

    // update the Inverters details
    document.getElementById("InvertersIGBTtemperature").innerText = Invertersdata.IGBTtemperature;
    document.getElementById("Inverterstemperature").innerText = Invertersdata.temperature;
    
    if (Invertersdata.status == 1) {
        const r2d = document.createElement("text");
        r2d.classList.add("r2d");
        document.getElementById("InverterStatus").replaceChild(r2d)
    }
}