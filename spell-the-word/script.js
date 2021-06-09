var widget = new Vue({
    el: '#widget',
    data: {
      message: 'Hello Vue!',
      name: '',
      show: false,
      dictionary : ['apple', 'ball', 'cat', 'dog', 'elephant', 'frog', 'goat', 'hat', 'ice', 'joke', 'kite', 'love', 'monkey', 'name', 'orange', 'price', 'queue', 'right', 'site', 'tank', 'utsav', 'vine', 'white', 'xerox', 'yoyo', 'zebra']
    },
    methods : {
        reset: function() {
            this.show = false;
           // document.querySelectorAll('.widget-output p').forEach((elem) => elem.remove());
            this.name = '';      
        },
        submit: function() {
            let dictionary = this.dictionary;
            this.show = false;
            //document.querySelectorAll('.widget-output p').forEach((elem) => elem.remove());
            let searchTerm = this.name.toLowerCase().split('');
            //let text = searchTerm.toLowerCase().split('');
            
            searchTerm.forEach(function(element) {
                for(let j=0; j < dictionary.length; j++) { 
                    if (element == dictionary[j].substring(0, 1)) {
                        this.show = true;
                        console.log("true");
                        let letter = element.toUpperCase();
                        document.querySelector('.widget-output').innerHTML += `<p>${letter} for ${dictionary[j]}</p>`;
                        break;
                    } 
                }
            })
        }
    }
});
