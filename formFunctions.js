$(document).ready(function(){

    $('#input').change(function(){

        var input = $(this).val();
        $('ul').append('<li>' + input+ '<button class="done">Done</button>' + '<button class="delete"> <i style= "font-size:20px" class="fa fa-trash-o"></i></button>' + '</li>');
        $(this).val('');
    })
    
    $('ul').on('click','.done',function(){

        $(this).parent('li').css('background-color', 'green')
        
    })

    $('ul').on('click','.delete',function(){

        $(this).parent('li').fadeOut(1000)
    
    })
    

})