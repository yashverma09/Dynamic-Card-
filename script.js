// Hy! You can really help me if you donate me leastways 1 dollor :)
// -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-




















var mouse = {
      X   : 0,
      Y   : 0,
      CX  : 0,
      CY  : 0
    },
    block = {
      X   : mouse.X,
      Y   : mouse.Y,
      CX  : mouse.CX,
      CY  : mouse.CY
    },
    imags = [
      'https://cdn.pixabay.com/photo/2018/02/13/14/00/stunning-3150818_960_720.jpg',
      'https://cdn.pixabay.com/photo/2019/11/01/08/44/flashes-4593614_960_720.jpg',
      'https://cdn.pixabay.com/photo/2013/08/26/09/40/silhouette-175970_960_720.jpg',
      'https://cdn.pixabay.com/photo/2022/04/22/17/33/forest-7150274_960_720.jpg',
    ];

$('.block').on('mousemove', function(e) {
  mouse.X   = (e.pageX - $(this).offset().left) - $('.block').width() / 2;
  mouse.Y   = (e.pageY - $(this).offset().top) - $('.block').height() / 2;
})

$('.block').on('mouseleave', function(e) {
  mouse.X   = mouse.CX;
  mouse.Y   = mouse.CY;
})

setInterval(function(){

  block.CY   += (mouse.Y - block.CY) / 12;
  block.CX   += (mouse.X - block.CX) / 12;

  $('.block .circleLight').css('background', 'radial-gradient(circle at ' + mouse.X + 'px ' + mouse.Y + 'px, #fff, transparent)')
  $('.block').css({
    transform : 'scale(1.03) translate(' + (block.CX * 0.10) + 'px, ' + (block.CY * 0.10) + 'px) rotateX(' + (block.CY * 0.10) + 'deg) rotateY(' + (block.CX * 0.10) + 'deg)'
  })

}, 20);

$('.slider .item').each(function(i){
  
  if(i == 0){
    
    $(this).addClass('active');
    $(this).next().addClass('next');
    $(this).prev().addClass('prev');
  }
  
  $(this).attr('id', 'slide-'+i);
  
  $(this).prepend(
    $('<div>', {class: 'blur', style: 'background-image: url(' + imags[i] + ');'}),
    $('<div>', {class: 'bg', style: 'background-image: url(' + imags[i] + ');'})
  )
  
  $(this).find('.block').css('background-image', 'url(' + imags[i] + ')')
  
  $('.navigations .dots').append(
    $('<li>', {class: i == 0 ? 'active' : '', id: i}).on('click', function(){
    var cSlide = $('.slider #slide-'+$(this).attr('id'));
      
      $('.navigations .dots li').removeClass('active');
      $(this).addClass('active');
      
      $('.slider .item').removeClass('active prev next');
      cSlide.addClass('active');
      cSlide.next().addClass('next');
      cSlide.prev().addClass('prev');
    })
  )
})