if(!NativeApp){
    var NativeApp = {
        getGps: function(){
            return {
                onStart: function(method){
                    console.log('gps.onStart', method);
                },

                onStop: function(method){
                    console.log('gps.onStop', method);
                },

                onUpdate: function(method){
                    console.log('gps.onUpdate', method);
                },

                setDelay: function(value){
                    console.log('gps.setDelay');
                },

                getDelay: function(){
                    console.log('gps.getDelay');
                    return 3;
                }
            };
        },

        getMath: function(){
            return {
                sum: function(args){
                    console.log('math.sum', args);

                    return args.reduce((prev, current) => {
                        if(typeof current === 'number'){
                            return prev + current;
                        }
                        if(typeof current === 'string'){
                            return prev + current.length;
                        }

                        return prev;
                    }, 0);
                }
            }
        }
    };
}
