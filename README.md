[dear penguins]: => (
                    I KNOW IT'S A TRANSPILER NOT A COMPILER NERD SILENCE
)
[dear paige]: => (
                    no
)
[dear penguins]: => (
                    yes
)
[dear paige]: => (
                    Well, if we're talking semantics, technically speaking, a compiler compiles source code into machine code, 
                    while a transpiler translates source code from one programming language to another. 
                    So, in the spirit of accuracy, let's transpile "compiler" into "transpiler" in the README! 😜
)
[dear penguins]: => (
                    nuh uh
)
[dear paige]: => (
                    yuh uh, no returns...
)


---

### <a href="https://github.com/paishee/unityscript"><img height=80 src="https://github.com/paishee/unityscript/blob/main/assets/unityscript%20w%20text.png" alt="UnityScript">

<a href="https://www.npmjs.com/package/unityscript"><img height=22 src="https://img.shields.io/npm/v/unityscript?style=flat&color=gold&logo=npm&logoColor=white" alt="version" />
<a href="https://www.npmjs.com/package/unityscript"><img height=22 src="https://img.shields.io/npm/dt/unityscript?style=flat&color=plum&logo=docusign&logoColor=white" alt="downloads" />
<a href="https://npmjs.com/package/aepl"><img src="https://img.shields.io/badge/powered%20by-aepl-a?color=salmon&logo=npm&logoColor=white" alt="powered by aepl" /></a>
<a href="https://github.com/paishee/unityscript/wiki"><img height=22 src="https://img.shields.io/badge/documentation-blue?style=flat&color=black&logo=github&logoColor=white" alt="documentation" />
<img height=22 src="https://github.com/paishee/unityscript/actions/workflows/publish.yml/badge.svg" alt="publish">

UnityScript is an early access JavaScript to C# compiler and API wrapper package for the game engine Unity<br>

⚠️ __PLEASE NOTE:__
this package is currently in early access and is far from finished ⚠️ 

<br>

<table>

<tr><td>

### Installations

</td></tr>
<tr><td>

<table><tr>
<td>

stable release versions are on [npm](https://npmjs.com/package/unityscript)

</td><td>

experimental versions are on [github](https://github.com/paishee/unityscript)

</td></tr><tr><td>

```console
npm install unityscript
```

</td><td>

```console
npm install paishee/unityscript      
```

</td>
</table>
</td>

</tr></table>

<br>

--- 

<br><br>

```js
const { Workspace } = require('unityscript');
const workspace = new Workspace();


workspace.on("ready", (ctx) => {
    const scene = ctx.scenes.first();

    let cube = scene.spawn(Cube, "cubert", {
        localPosition: { x: 5, y: 5, z: 5 },
    });
});


workspace.open("C:/Users/owner/MyProject");
```

<br>

## Disclaimer
this project is created out of pure boredom and coolness<br>
this project and the developers behind it are:
- not associated with Unity or its developers
- not responsible for anything created

<br><br>

## Collaborators

<table>
    
  <tr>
    <td align="center"><a href="https://github.com/paishee"><img src="https://avatars.githubusercontent.com/u/88659700?v=4?s=100" width="100px;" alt="me"/><br /><sub><b>paishee</b></sub></a><br/>
    <td align="center"><a href="https://github.com/polish-penguin-dev"><img src="https://avatars.githubusercontent.com/u/74113025?v=4?s=100" width="100px;" alt="penguins"/><br /><sub><b>penguin dev</b></sub></a><br/>
</td>
    
      
</table>
