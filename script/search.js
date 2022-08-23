function searchToggle(obj, evt){
    var container = $(obj).closest('.search-wrapper');
        if(!container.hasClass('active')){
            container.addClass('active');
            evt.preventDefault();
        }
        else if(container.hasClass('active') && $(obj).closest('.input-holder').length == 0){
            container.removeClass('active');
            // clear input
            container.find('.search-input').val('');
        }   
  }
  
  function searchToggle_top(obj, evt){
      var container = $(obj).closest('.search-wrapper_top');
          if(!container.hasClass('active')){
              container.addClass('active');
              evt.preventDefault();
          }
          else if(container.hasClass('active') && $(obj).closest('.input-holder_top').length == 0){
              container.removeClass('active');
              // clear input
              container.find('.search-input_top').val('');
          }
  }
  