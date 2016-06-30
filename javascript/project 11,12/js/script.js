
  $(document).ready(function() {

    $('.carousel-list').myCarousel({
      slideSpeed: 500,
      widthElementParam: 150,
      slideCount: 2
    });


  });



  $(function() {

    var html = $('#test').html();
    var data = {
      name: 'Alpatov Alexander',
      foto: 'img/foto.jpg',
      position: 'Junior FrontEnd Developer',
      reasons: [
        {
        reason: 'I like to break the brain comes up with something'
        },
        {
        reason: 'I enjoy a job well done'
        }
      ],
      phone: '+38(050)-946-17-40',
      vk: 'https://vk.com/id9030930',
      feedback: 'this is feedback '

    };

    var content = tmpl(html, data);

    $('.container').append(content);


  });
