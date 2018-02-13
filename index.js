#!/usr/bin/env node

var concat = require('concat-stream')
var Mustache = require('mustache')
var template = require('./main.js')()
var yaml = require('js-yaml')

process.stdin.pipe(concat(makemanifest))

function makemanifest (data) {
  var state = yaml.safeLoad(data)
  process.stdout.write(Mustache.render(template, state))
}
