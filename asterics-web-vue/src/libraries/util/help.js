function loadTags() {
  return fetch("https://api.github.com/repos/asterics/AsTeRICS/tags")
    .then(res => res.json())
    .then(out => {
      let r = [];
      if (!out.hasOwnProperty("message")) {
        out.forEach(element => {
          if (/^v\d(.\d){0,2}$/g.test(element.name)) {
            r.push(element.name);
          }
        });
      }
      return r;
    })
    .catch(err => {
      throw err;
    });
}

async function asyncForEach(array, cb) {
  for (let i = 0; i < array.length; i++) [await cb(array[i], i, array)];
}

const getContent = async l => {
  return await getS(l);
};

const getS = async url => {
  let response = await fetch(url);
  let ret = await response.json();

  let hasChilds = false;
  let n = [];

  /* If response has message property (i.e. "Not Found"), indication that fetch() failed */
  if (!ret.hasOwnProperty("message")) {
    ret.forEach(v => {
      if (v.type == "dir") hasChilds = true;

      // eslint-disable-next-line
      if ((v.type == "file" && new RegExp("html?$").test(v.name)) || v.type == "dir") {
        let c = { node: v, contents: [] };
        n.push(c);
      }
    });
  }

  if (hasChilds) {
    await asyncForEach(n, async v => {
      if (v.node.type == "dir" && v.node.name != "img") {
        let c = await getS(v.node.url);
        v.contents = [...c];
      }
    });
  }
  return n;
};

function isRootElement(node) {
  return !node.path.match(/\//);
}

function getParentId(node) {
  if (!isRootElement(node)) {
    let m = /(.*)\/(.*)/.exec(node.path);
    return m[1];
  }
}

function listToTree(list) {
  var map = {},
    node,
    roots = [],
    i;
  for (i = 0; i < list.length; i++) {
    map[list[i].path] = i;
    list[i].children = [];
  }
  for (i = 0; i < list.length; i++) {
    node = list[i];
    if (!isRootElement(node)) {
      list[map[getParentId(node)]].children.push(node);
    } else {
      roots.push(node);
    }
  }
  return roots;
}

export { loadTags, getContent, listToTree };
