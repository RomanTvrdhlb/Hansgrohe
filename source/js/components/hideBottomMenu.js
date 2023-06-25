  window.addEventListener('scroll', function() {
    var block = document.getElementById('bottomCard');
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var windowHeight = window.innerHeight ||  document.documentElement.clientHeight;
    var documentHeight = document.documentElement.scrollHeight;

    if (documentHeight - (scrollTop + windowHeight) < 400) {
      block.classList.remove('show');
    } else {
      block.classList.add('show');
    }
  });
