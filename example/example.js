const brain = require('../node_modules/brain.js')

const neuralNet = new brain.NeuralNetwork()

neuralNet.train([
    {input: {r: 1, g: 0, b: 0}, output: { light: 1}},
    {input: {r: 0, g: 1, b: 0}, output: {dark:1 }},
    {input: {r: 0, g: 0, b: 1}, output: {dark:1}},
    {input: {r: 1, g: 1, b: 1}, output: {dark:1}},
    {input: {r: 0, g: 0, b: 0}, output: { light:1}},
    {input: {r: 0.5,g: 0, b: 0}, output: { light:1}},
    {input: {r: 0, g: 0.5, b: 0}, output: {dark: 1}},
    {input: {r: 0, g: 0, b: 0.5}, output: {dark: 1}},
    {input: {r: 0.5, g: 0.5, b: 0.5}, output: {dark: 1}},
    {input: {r: 1, g: 1, b: 0}, output: {dark: 1}},
    {input: {r: 0, g: 1, b: 1}, output: {dark: 1}},
    {input: {r: 1, g: 0, b: 1}, output: {dark: 1}}


])

// var run = neuralNet.run(rgb)
// console.log(run)
    
