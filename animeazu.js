/*
 * Arleth-desz.blogspot.com
 */
var posts_no = 9999;
var post_rilis = true;
function post_latest(M) {
  document.write('<ul class="last-post-wrap">');
  for (var I = 0; I < posts_no; I++) {
    var j, z = M.feed.entry[I],
      E = z.title.$t;
    if (I == M.feed.entry.length) {
      break
    }
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
    x[1] = "Januari", x[2] = "Februari", x[3] = "Maret", x[4] = "April", x[5] = "May", x[6] = "Juni", x[7] = "Juli", x[8] = "Agustus", x[9] = "September", x[10] = "Oktober", x[11] = "November", x[12] = "Desember",
      document.write('<li class="last-post-item">'), document.write('<div class="post_item"><a href="' + j + '" target ="_top">' + E + "</a></div>"), 1 == post_rilis && document.write('<span class="post-update">' + K + " " + x[parseInt(J, 10)] + " " + H + "</span>");
    var G = "",
      D = 0;
    document.write("</li>")
  }
  document.write("</ul>")
};
