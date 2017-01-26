
/**
$('#myForm').submit(function(){
	//alert('bolaaaaaa');
	$.ajax({
    url: "https://formspree.io/lrnpita@gmail.com", 
    method: "POST",
    data: {message: "hello!"},
    dataType: "json"
});
});