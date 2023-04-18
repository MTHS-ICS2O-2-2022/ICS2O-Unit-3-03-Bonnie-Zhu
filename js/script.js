// Created by: Bonnie Zhu
// Created on: April. 2023
// This file contains the JS functions for index.html

'use strict'
/**
* This function calculates your pay depending on the amount of hours you work (including tax).
*/
function calculate() {
  // input
  const Radius = parseInt(document.getElementById('Radius').value)

  // process
  const Volume = (4 / 3) * Math.PI * Radius ** 3

  // output
  document.getElementById('Volume').innerHTML = 'Volume is: ' + Volume + ' cm³'
}

