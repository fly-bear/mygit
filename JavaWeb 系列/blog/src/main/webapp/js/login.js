/* Inspired by Ozgun Tandiroglu's Dribbble Shot.
 * http://dribbble.com/shots/1068722-Login
 * 2013 by Kaushalya R. Mandaliya
 * https://twitter.com/kmandalwala
 * http://seebeetee.com
 * For crazyness just change that rotate from 360deg to 3600deg...:P
 * Thanks & Enjoy.
 */
$(".loginbutton").click(function(){
  $(".loginbutton").toggleClass("activeloginbutton");
  $("form").slideToggle(600);
});