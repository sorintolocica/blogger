// Setați numărul total de postări pe care doriți să le afișați
var posts_no = 9999;

// Obțineți feed-ul blogului prin apelarea API-ului Blogger
var script = document.createElement('script');
script.src = 'https://www.blogger.com/feeds/5958861168810446099/posts/default?alt=json-in-script&callback=displayPosts';
document.getElementsByTagName('head')[0].appendChild(script);

function displayPosts(response) {
  // Creați un element ul pentru a afișa lista de postări
  var ul = document.createElement('ul');
  ul.className = 'last-post-wrap';

  // Parcurgeți fiecare postare în feed-ul blogului
  for (var I = 0; I < posts_no; I++) {
    // Opriți bucla dacă am ajuns la numărul total de postări
    if (I >= response.feed.entry.length) {
      break;
    }

    // Obțineți detaliile postării curente
    var z = response.feed.entry[I],
      E = z.title.$t;

    // Căutați link-ul postării
    for (var y = 0; y < z.link.length; y++) {
      if ("alternate" == z.link[y].rel) {
        var j = z.link[y].href;
        break;
      }
    }

    // Obțineți data postării
    var F = z.published.$t,
      H = F.substring(0, 4),
      J = F.substring(5, 7),
      K = F.substring(8, 10),
      x = new Array;
    x[1] = "Januari", x[2] = "Februari", x[3] = "Maret", x[4] = "April", x[5] = "May", x[6] = "Juni", x[7] = "Juli", x[8] = "Agustus", x[9] = "September", x[10] = "Oktober", x[11] = "November", x[12] = "Desember";

    // Creați elementul li pentru postarea curentă
    var li = document.createElement('li');
    li.className = 'last-post-item';

    // Adăugați titlul și data postării în elementul li
    li.innerHTML = '<div class="post_item"><a href="' + j