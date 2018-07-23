const fs = require('fs')
const path = require('path')
const config = require('../config')
const mockPath = path.resolve(__dirname,'../',config.dev.mockPath)
let paths = []
let cycle = (dir)=>{
  let dirs = fs.readdirSync(dir)
  dirs.forEach(item=>{
    let nextPath = path.resolve(dir,item)
    let stat = fs.statSync(nextPath)
    if(stat.isDirectory()){
      cycle(path.resolve(dir,item))
    }else{
      paths.push(path.resolve(dir.replace(mockPath,''),item))
    }
  })
}

exports.serve = (app)=>{
  cycle(mockPath)
  paths.forEach(item=>{
    let p = path.parse(item)
    let jsonStr = fs.readFileSync(path.join(mockPath,item),'utf-8')
    let json = JSON.parse(jsonStr)
    app[json.method](`${p.dir}/${p.name}`,(req,res,next)=>{
      res.json(json.res)
    })
  })
}
