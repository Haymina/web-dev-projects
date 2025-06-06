const rock = document.querySelector(rock);
const paper = document.querySelector(paper);
const scissors = document.querySelector(scissors);
const choices = [rock, paper, scissors];
const computerMove=choices[Math.floor(Math.random*(choices.length)+1)];