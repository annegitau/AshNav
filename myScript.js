(function () {
    
    document.addEventListener('deviceready', onDeviceReady.bind(this), false);
    var pictureSource, destinationType;
    
    function onDeviceReady() {
        pictureSource = navigator.camera.PictureSourceType;
        destinationType = navigator.camera.DestinationType;
        
        document.getElementById("capturePhoto").onclick = function () {
            alert("Am here!");
            navigator.camera.getPicture(onPhotoDataSuccess, onFail, {
                quality : 50, destinationType : destinationType.DATA_URL
            });
        }
        document.getElementById("geolocationdata")addEventListener("click",function(){
            navigator.geolocation.getCurrentLocation(onSuccess, onError, {enableHighAccuracy:true});
        });
    };
    var onSuccess = function(position){
        alert('Latitude' + position.coords.latitude + '\n'+
             'Longitute' + position.coords.longitude + '\n');
    };
    function onError(error){
        alert('code'+error.code + '\n'+
             'Message : '+ error.message + '\n');
    }
     function onPhotoDataSuccess(imageData){
         var smallImage = document.getElementById('smallImage');
         smallImage.style.display = 'block';
         smallImage.src = "data:image/jpeg;base64," + imageData;
     }
    function onFail(message){
        alert("Failed because" + message);
    }
    
    /*function onPhotoURLSuccess(imageURL){
         var largeImage = document.getElementById('largeImage');
         largeImage.style.display = 'block';
         largeImage.src = "data:image/jpeg;base64," + imageURL;
     };*/
})();