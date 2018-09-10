function isValidGitResponse(obj) {
  if (obj.hasOwnProperty("message")) {
    return obj.message !== "Not Found";
  }
  return true;
}

function loadGitTags(url, pattern = /^v\d(.\d){0,2}$/g) {
  return fetch(`${url}/tags`)
    .then(r => r.json())
    .then(r => {
      let res = [];
      if (isValidGitResponse(r)) {
        r.forEach(element => {
          if (pattern.test(element.name)) {
            res.push(element.name);
          }
        });
      }
      return res;
    });
}

function loadGitContent(url, path, tag) {
  let call = `${url}/contents/${path}?ref=${tag}`;

  return fetch(call).then(r => {
    return r.json();
  });
}

function loadGitTree(url, sha) {
  let call = `${url}/git/trees/${sha}?recursive=1`;

  return fetch(call).then(r => {
    return r.json();
  });
}

function isRootElement(node) {
  return !node.path.match(/\//);
}

function getParentId(node) {
  if (!isRootElement(node)) {
    let m = /(.*)\/(.*)/.exec(node.path);
    return m[1];
  }
}

function unfoldGitTree(list) {
  let map = {},
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

// eslint-disable-next-line
export { isValidGitResponse, loadGitTags, loadGitContent, loadGitTree, unfoldGitTree };
