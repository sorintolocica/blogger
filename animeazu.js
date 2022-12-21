/*
 * Arleth-desz.blogspot.com
 */

// Setați numărul total de postări pe care doriți să le afișați
var posts_no = 100;

function post_latest(M) {
  // Creați un element ul pentru a afișa lista de postări
  var ul = document.createElement('ul');
  ul.className = 'last-post-wrap';

  // Parcurgeți fiecare postare în feed-ul blogului
  for (var I = 0; I < posts_no; I++) {
    // Obțineți detaliile postării curente
    var z = M.feed.entry[I];
    var E = z.title.$t;
    var j;
    for (var y = 0; y < z.link.length; y++) {
      if ("replies" == z.link[y].rel && "text/html" == z.link[y].type) {
        var C = z.link[y].title,
          B = z.link[y].href
      }
      if ("alternate" == z.link[y].rel) {
        j = z.link[y].href;
        break
      }
    }
    var F = z.published.$t,
      H = F.substring(0, 4),
      J = F.substring(5, 7),
      K = F.substring(8, 10),
      x = new Array;
    x[1] = "Januari", x[2] = "Februari", x[3] = "Maret", x[4] = "April", x[5] = "May", x[6] = "Juni", x[7] = "Juli", x[8] = "Agustus", x[9] = "September", x[10] = "Oktober", x[11] = "November", x[12] = "Desember";

    // Creați un element li pentru fiecare postare
    var li = document.createElement('li');
    li.className = 'last-post-item';

    // Creați un element div pentru a conține titlul postării
    var div = document.createElement('div');
    div.className = 'post_item';

    // Creați un element a pentru titlul postării
    var a = document.createElement('a');
    a.href = j;
    a.target = '_top';
    a.textContent = E;

    // Adăugați titlul postării în elementul div
    div.appendChild(a);

    // Adăugați elementul div în elementul li
