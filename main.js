$(document).ready(function () {
  const colors = [
    '#ff5733', '#33ff57', '#3357ff', '#f1c40f',
    '#8e44ad', '#16a085', '#e67e22', '#1abc9c',
    '#2c3e50', '#d35400', '#c0392b', '#7f8c8d'
  ];

  $('#add-block').click(function () {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const $block = $('<div class="block"></div>').css('background-color', randomColor);

    $block.click(function () {
      $(this).remove();
    });

    $('#container').append($block);
  });
});
