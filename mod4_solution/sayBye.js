(function(window) {
    var bye = new Object();
    var word = "Bye-Bye,";
    bye.speak = function speak(name) {
        console.log(word + " " + name);
    };
    window.bye = bye;
})(window);