<script>
    $(document).ready(function(){
      $('#red').click(function(){
        $('html').css({'background-color':'red'});
      });
      $('#blue').click(function(){
        $('html').css({'background-color':'blue'});
      });$('#yellow').click(function(){
        $('html').css({'background-color':'yellow'});
      });$('#green').click(function(){
        $('html').css({'background-color':'green'});
      });$('#white').click(function(){
        $('html').css({'background-color':'white'});
      });$('#gray').click(function(){
        $('html').css({'background-color':'gray'});
      });
    });
    $('#CVbutton').click(function(){
      $('#coverletter').toggle(1000);
    });
</script>