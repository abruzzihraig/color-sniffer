window.onload = function() {
    var hex_value = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
    function ColorSniffer(element) {
        var _self = this;
        this.text = element.innerHTML; 
        this.result = this.text;
        this.color_array = this.text.match(/#[0-9a-fA-F]{6}/g);
        this.render = function() {
            this.color_array.forEach(function(elem) {
                _self.result = _self.result.replace(elem, '<span style="background-color:'+elem+';color:'+_self.inverse_color(elem)+'">'+elem+'</span>');
            });
            element.innerHTML = _self.result;
        } 
        this.inverse_color = function(hex_color) {
            var result_color = '#';
            hex_color = hex_color.substring(1);
            
            for(var i=0, len=hex_color.length; i < len; i++) {
                result_color += hex_value[15 - hex_value.indexOf(hex_color[i])];
            }
            return result_color;
        }
    }

    var color_sniffer = new ColorSniffer(document.getElementsByTagName('body')[0]);
    color_sniffer.render();
    console.log(color_sniffer.text);
};
