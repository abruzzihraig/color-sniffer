window.onload = function() {
    function ColorSniffer(element) {
        var _self = this;
        this.text = element.innerHTML; 
        this.result = this.text;
        this.color_array = this.text.match(/#[0-9a-fA-F]{6}/g);
        this.render = function() {
            this.color_array.forEach(function(elem) {
                _self.result = _self.result.replace(elem, '<span style="background-color:'+elem+'">'+elem+'</span>');
            });
            element.innerHTML = _self.result;
        } 
    }

    ColorSniffer.prototype.trim = function() {
        // TODO
    }

    var color_sniffer = new ColorSniffer(document.getElementsByTagName('body')[0]);
    color_sniffer.render();
    console.log(color_sniffer.text);
};
