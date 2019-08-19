import Service from '@ember/service';

export default Service.extend({
    
  changeFavicon(active) {
        var src = '/game/uploads/misc/favicon.ico';
        if (active) { 
            src = '/game/uploads/misc/favicon-active.ico';
        }
        $('link[rel="shortcut icon"]').attr('href', src);
        
    },
     
});