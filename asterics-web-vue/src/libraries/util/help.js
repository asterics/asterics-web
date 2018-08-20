function loadTags() {
  return fetch("https://api.github.com/repos/asterics/AsTeRICS/tags")
    .then(res => res.json())
    .then(out => {
      let r = [];
      out.forEach(element => {
        if (/^v\d(.\d){0,2}$/g.test(element.name)) {
          r.push(element.name);
        }
      });
      return r;
    })
    .catch(err => {
      throw err;
    });
}

function HelpDirectory(name, type, path) {
  this.name = name;
  this.type = type;
  this.path = path;
  this.children = [];
}

export { loadTags, HelpDirectory };
