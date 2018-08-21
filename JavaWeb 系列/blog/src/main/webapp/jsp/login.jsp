<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<!DOCTYPE html>
<html lang="en" >

<head>
  <meta charset="UTF-8">
  <link rel="ICON" href="/blog/favicon.ico"/>
  <link rel="SHORTCUT ICON" href="/blog/bear.ico"/>
  <title>Login...</title>


  <link rel='stylesheet' href='http://weloveiconfonts.com/api/?family=entypo'>

  <style>
    /* NOTE: The styles were added inline because Prefixfree needs access to your styles and they must be inlined if they are on local disk! */
    @import url(https://fonts.googleapis.com/css?family=Open+Sans);
    /**
     * Colors
     */
    /**
     * Units
     */
    [class*="entypo-"]:before {
      font-family: 'entypo', sans-serif;
      color: #c6adad;
      margin: 0.3em;
    }

    body, html {
      background: #595a5a;
      color: #c6adad;
      font-size: 1em;
      font-family: 'Open sans', sans-serif;
      margin: 0;
    }

    header {
      font-size: 2.0em;
      border-bottom: 0.05em solid #b3b3b3;
      height: 1.5em;
      clear: both;
      margin: 0.5em 0;
    }

    header div {
      float: right;
      display: inline-block;
    }

    a {
      text-decoration: none;
      color: inherit;
    }

    div.login {
      margin: 0 0.5em;
      text-transform: uppercase;
    }

    .loginbutton {
      width: 5.2em;
      padding: 1em;
      text-align: center;
      height: 1.6em;
      margin: 4.9em auto;
      background: #8f3333;
      cursor: pointer;
      transition: 1s ease-in-out;
    }

    form {
      display: none;
      margin: -12em auto;
      position: relative;
      padding: 0.5em;
      width: 31em;
      font-size: 0.7em;
    }

    form div {
      transition: .5s ease-in-out;
      display: inline-block;
    }

    form div label {
      display: block;
    }

    form div input[type="text"], form div input[type="password"] {
      background: #b3b3b3;
      border: 0.1em solid #b3b3b3;
      width: 8.1em;
    }

    form div {
      padding: 0.5em;
      margin: 0 0.15em;
    }

    form div input[type="text"]:focus, form div input[type="password"]:focus {
      outline: none;
      color: #4d4d4d;
    }

    .activeloginbutton {
      transform: rotate(360deg) translate(-205%);
    }

    .credit {
      position: absolute;
      bottom: 0;
      margin: 1em;
    }

    .warp{
      position: relative;
      float: left;
      left: 45%;
    }

    form div:active, form div:hover, form div:focus {
      background: #692525;
    }

  </style>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/prefixfree/1.0.7/prefixfree.min.js"></script>

</head>

<body>

<header>
  <div class="login"><a href="#">清梦</a></div>
  <div class="entypo-light-up"></div>
  <%--<div class="entypo-pencil"></div>--%>
</header>
<div style="position:absolute;top:35%;left:45%">
  <div class="loginbutton">LOGIN</div>
  <form action="/blog/mainpage" method="POST">
    <div>
      <label for="name">username</label>
      <input type="text" name="name" id="name" />
    </div>
    <div>
      <label for="password">password</label>
      <input type="password" name="password" id="password" />
    </div>
    <input type="submit"></input>
  </form>
</div>
<div class="credit">Inspired by Ozgun Tandiroglu's Dribbble <a href="http://dribbble.com/shots/1068722-Login">shot</a>.</div>
<script src='http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>



<script  src="js/login.js"></script>




</body>

</html>
