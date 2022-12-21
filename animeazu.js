<!-- Începutul script-ului -->
<script>
  // Setați numărul total de postări pe care doriți să le afișați
  var posts_no = 100;

  // Obțineți feed-ul blogului prin apelarea API-ului Blogger
  var script = document.createElement('script');
  script.src = 'https://www.blogger.com/feeds/5958861168810446099/posts/default?alt=json-in-script&callback=displayPosts';
  document.getElementsByTagName('head')[0].appendChild(script);

  function displayPosts(response) {
    // Creați un element ul pentru a afișa lista de postări
    var ul = document.createElement('ul');
    ul.className = 'post-list';

    // Parcurgeți fiecare postare în feed-ul blogului
    for (var i = 0; i < posts_no; i++) {
      // Obțineți detaliile postării curente
      var post = response.feed.entry[i];
      var postTitle = post.title.$t;
      var postLink = post.link[0].href;
      var postDate = post.published.$t;

      // Creați un element li pentru fiecare postare
      var li = document.createElement('li');

      // Creați un element a pentru titlul postării
      var a = document.createElement('a');
      a.href = postLink;
      a.textContent = postTitle;

      // Adăugați titlul postării în elementul li
      li.appendChild(a);

      // Creați un element span pentru a afișa data postării
      var span = document.createElement('span');
      span.textContent = postDate;

      // Adăugați data postării în elementul li
      li.appendChild(span);

      // Adăugați elementul li în elementul ul
      ul.appendChild(li);
    }

    // Adăugați elementul ul în pagina web
    document.body.appendChild(ul);
  }
</script>
<!-- Sfârșitul script-ului -->
