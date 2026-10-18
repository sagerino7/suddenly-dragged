// Suddenly Dragged — shared site script

document.addEventListener('DOMContentLoaded', function () {
  // Rotating scrawled line (homepage hero)
  var scrawlEl = document.querySelector('[data-scrawl]');
  if (scrawlEl) {
    var lines = [
      '"forgot the quest"',
      '"where the fuck am i?"',
      '"even wizards get lost"',
      '"snaked myself"',
      '"there\'s something out there in the dark"'
    ];
    var pick = lines[Math.floor(Math.random() * lines.length)];
    scrawlEl.textContent = pick;
  }

  // Mark current nav link
  var path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.site-nav a[data-nav]').forEach(function (a) {
    if (a.getAttribute('href') === path) {
      a.style.color = 'var(--cyan)';
    }
  });
});
