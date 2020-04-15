'use strict'

function saveToStorage(key, value) {
    let valueStr = JSON.stringify(value);
    localStorage.setItem(key, valueStr);
}

function loadFromStorage(key) {
    let valueStr = localStorage.getItem(key);
    return JSON.parse(valueStr);
}