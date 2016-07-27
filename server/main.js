Meteor.startup(function() {
  //ImageUploads.remove({});
  //console.log("Images Uploads:", Collections.Images.find().count());
  console.log("Files:", Collections.Files.find().count());

  /*Collections.Images.on('removed', function (fileObj) {
    console.log("Removed " + fileObj._id + " from Images collection.");
  });*/
});

/*Meteor.methods({
  rotate: function() {
    Collections.Images.find().forEach(function (fileObj) {
      var readStream = fileObj.createReadStream('images');
      var writeStream = fileObj.createWriteStream('images');
      gm(readStream).swirl(180).stream().pipe(writeStream);
    });
  }
});
*/
