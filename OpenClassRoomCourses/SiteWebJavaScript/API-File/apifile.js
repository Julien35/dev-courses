(function() {

  function createThumbnail(file) {

    var reader = new FileReader();

    reader.addEventListener('load', function() {

      var imgElement = document.createElement('img');
      imgElement.style.maxWidth = '150px';
      imgElement.style.maxHeight = '150px';
      imgElement.src = this.result;
      prev.appendChild(imgElement);

    });

    reader.readAsDataURL(file);

  }

  var allowedTypes = ['png', 'jpg', 'jpeg', 'gif'],
    fileInput = document.querySelector('#file'),
    prev = document.querySelector('#prev');

  fileInput.addEventListener('change', function() {

    var files = this.files,
      filesLen = files.length,
      imgType;

    for (var i = 0; i < filesLen; i++) {

      imgType = files[i].name.split('.');
      imgType = imgType[imgType.length - 1];

      if (allowedTypes.indexOf(imgType) != -1) {
        createThumbnail(files[i]);
      }

    }

  });

})();
