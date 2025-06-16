// $(document).ready(function () {
//   const colors = [
//     '#ff5733', '#33ff57', '#3357ff', '#f1c40f',
//     '#8e44ad', '#16a085', '#e67e22', '#1abc9c',
//     '#2c3e50', '#d35400', '#c0392b', '#7f8c8d'
//   ];

//   $('#add-block').click(function () {
//     const randomColor = colors[Math.floor(Math.random() * colors.length)];
//     const $block = $('<div class="block"></div>').css('background-color', randomColor);

//     $block.click(function () {
//       $(this).remove();
//     });

//     $('#container').append($block);
//   });
// });


// $(document).ready(function () {
//   const lights = ['#red', '#yellow', '#green'];
//   let current = 0;

//   function updateLight() {
//     $('.light').removeClass('active');

//     $(lights[current]).addClass('active');
//   }

//   $('#next').click(function () {
//     current = (current + 1) % lights.length; 
//     updateLight();
//   });

//   updateLight(); 
// });


$(document).ready(function () {
  $('.star').click(function () {
    const index = $(this).data('index');

    $('.star').each(function () {
      const starIndex = $(this).data('index');
      if (starIndex <= index) {
        $(this).css('color', 'orange');
      } else {
        $(this).css('color', 'black');
      }
    });
  });
});

