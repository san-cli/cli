#!/usr/bin/env node 

const program=require('commander')
const helpOptions=require('./lib/core/help')
const goActions=require('./lib/core/goActions')

const { version } = require("./lib/constants")
program.version(version,'-v,--version')
helpOptions()
goActions()

program.parse(process.argv);

