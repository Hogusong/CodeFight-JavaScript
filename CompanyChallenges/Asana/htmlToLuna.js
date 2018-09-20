/*
While preparing for your first round interview with Asana, you start exploring Luna, Asana's in-house framework for automating Web application creation. For practice - and fun! - you decide to implement a simple HTML-to-Luna converter.

To keep things straightforward, you will only consider 4 HTML tags: div, p, b, img. Here's how valid HTML is constructed:

an empty string is valid HTML;
<img /> is valid HTML (note the whitespace character between img and /);
if HTML is valid HTML, then <div>HTML</div>, <p>HTML</p> and
<b>HTML</b> are all valid.
if HTML1 and HTML2 are both valid HTML, then HTML1HTML2 is valid HTML.
For example, <div><p><img /></p><b></b></div> is valid HTML, but <div><p></div> is invalid.

The conversion of each tag from HTML to Luna format is performed as follows:

<div><arg1><arg2>...</div> → DIV([arg1, arg2, arg3, ... ]);
<p><arg1><arg2>...</p> → P([arg1, arg2, arg3, ... ]);
<b><arg1><arg2>...</b> → B([arg1, arg2, arg3, ... ]);
<img /> → IMG({})
Example

For html = "<div><img /></div>", the output should be
htmlToLuna(html) = "DIV([IMG({})])";
For html = "<div><p><img /></p><b></b></div>", the output should be
htmlToLuna(html) = "DIV([P([IMG({})]), B([])])";
For html = "<div><p></p><p></p><p></p></div>", the output should be
htmlToLuna(html) = "DIV([P([]), P([]), P([])])".
*/

function htmlToLuna(html) {
  let htmlString = html.replace(/[<,>]/g, '.');
  let tempArr = htmlString.split('.');
  let htmlArr = []
  tempArr.forEach(element => {
    if (element.length > 0) htmlArr.push(element)    
  });

  let htmlLuna = '';
  const que = [];
  for (let i=0; i<htmlArr.length; i++){
    const s = htmlArr[i].toUpperCase();
    if (s === 'IMG /') {
      htmlLuna += 'IMG({})';   
    } else if (s[0] === '/' ) {
      htmlLuna += '])' 
      que.pop()
    } else {
      if (que.length > 0 && htmlLuna[htmlLuna.length-1] != '[') htmlLuna += ', ';
      htmlLuna += s + '([' ;
      que.push(s);
    }
  }
  return htmlLuna;
}
