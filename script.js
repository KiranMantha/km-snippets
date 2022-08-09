String.prototype.interpolate = function (params) {
  const names = Object.keys(params);
  const vals = Object.values(params);
  return new Function(...names, `return \`${this}\`;`)(...vals);
};

const template = document.querySelector('#template');
const html = template.innerHTML.interpolate({
  data: [
    {
      article: 'Article title one',
      author: 'y',
    },
    {
      article: 'Article title two',
      author: 'h',
    },
  ],
});
const placeholder = document.querySelector('#placeholder');
placeholder.innerHTML = html;
console.log(html);
