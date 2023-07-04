'use strict';
const game = document.querySelector('.game');
const cursor = document.querySelector('.cursor');
const startBtn = document.querySelector('.start button');
// const holes = document.querySelectorAll('.hole');
const options = document.getElementById('options');
const usLangSw = document.getElementById('us');
const uaLangSw = document.getElementById('ua');
const soundOnSw = document.getElementById('on');
const soundOffSw = document.getElementById('off');
const holes = document.querySelectorAll('.hole');
const scoreBoard = document.getElementById('score');
const moles = document.querySelectorAll('.mole');
const boom = document.querySelector('.boom');

let lastHole;
let timeUp = false;
let score = 0;
let muted = false;
let duration = 20000;
let timeOut = duration / 1000;
let countdownText = 's left!';
let btnText = 'Start!';