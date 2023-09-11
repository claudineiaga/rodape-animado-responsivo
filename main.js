function gerarbolas() {
  for (var i = 0; i < Math.floor(window.innerWidth / 20); i++) {
    $(".animacao").append(`
    <div class="bola"></div>
  `);
    var colors = ["#23161e", "#e9199a"];
    $(".bola")
      .eq(i)
      .css({
        bottom: "0px",
        left: Math.random() * window.innerWidth - 100,
        "animation-delay": Math.random() * 5 + "s",
        transform: "translateY(" + Math.random() * 10 + "px)",
        "background-color": colors[i % 2]
      });
  }
}
gerarbolas();
 
window.addEventListener("resize", function (e) {
  $(".animacao .bola").remove();
  gerarbolas();
});