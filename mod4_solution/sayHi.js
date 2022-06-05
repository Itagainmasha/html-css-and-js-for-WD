(function(window) {
    var hello = new Object();
    var word = "Hi,";
    hello.speak = function(name) {
        console.log(word + " " + name);
    };
    window.hello = hello;
})(window);