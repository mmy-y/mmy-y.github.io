var posts=["archives/c74c8b34.html","archives/1a12a789.html","archives/5a9296a.html","archives/54c35e39.html","archives/50a9f1de.html","archives/428e76ab.html","archives/50a7fc42.html","archives/273541a6.html"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};