<!DOCTYPE HTML>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Лисёнок</title>

    <!-- Favicons -->
    <link rel="shortcut icon" href="favicon.png">
    <link rel="apple-touch-icon" href="apple-touch-icon.png">
    <link rel="apple-touch-icon" sizes="72x72" href="apple-touch-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="114x114" href="apple-touch-icon-114x114.png">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <!-- Styles -->
    <link href="https://fonts.googleapis.com/css?family=Lora:400,400i,700,700i|Montserrat:400,500,700|Playfair+Display:400,400i,700,700i&amp;subset=cyrillic"
          rel="stylesheet">
    <link href="{{env('APP_URL')}}css/style.css?213223333" rel="stylesheet" media="screen">
</head>
<body>
<!-- SCRIPTS -->
<div id="app">
    @yield('content')
</div>
<script src="{{env('APP_URL')}}js/jquery.min.js"></script>
<script src="{{env('APP_URL')}}js/app.js?121223313"></script>
<script src="{{env('APP_URL')}}js/bootstrap.min.js"></script>
<script src="{{env('APP_URL')}}js/animsition.min.js"></script>
<script src="{{env('APP_URL')}}js/noframework.waypoints.min.js"></script>
<script src="{{env('APP_URL')}}js/jquery.validate.min.js"></script>
<script src="{{env('APP_URL')}}js/jquery.magnific-popup.min.js"></script>
<script src="{{env('APP_URL')}}js/wow.min.js"></script>
<script src="{{env('APP_URL')}}js/jquery.ajaxchimp.min.js"></script>
<script src="{{env('APP_URL')}}js/jarallax.js"></script>
<script src="{{env('APP_URL')}}js/isotope.pkgd.min.js"></script>
<script src="{{env('APP_URL')}}js/imagesloaded.pkgd.js"></script>
<script src="{{env('APP_URL')}}js/interface.js"></script>
<script src="{{env('APP_URL')}}js/lazy-line-painter-1.9.6.min.js"></script>

<script src="{{env('APP_URL')}}js/main.js?121123333"></script>

<!--<script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/ScrollMagic.min.js"></script>-->
<!--<script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/plugins/debug.addIndicators.min.js"></script>-->




</body>
</html>
