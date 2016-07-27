Template.uploadFile.created = function () {
  this.filename = new ReactiveVar('');
};

// Can't call getHandler until startup so that Collections object is available
Meteor.startup(function () {

  Template.uploadFile.events({
    'change input.any': FS.EventHandlers.insertFiles(Collections.Files, {
      metadata: function (fileObj) {
        return {
          owner: Meteor.userId(),
          foo: "bar",
          dropped: false
        };
      },
      after: function (error, fileObj) {
        if (!error) {
          console.log("Inserted", fileObj.name());
        }
      }
    }),
    'keyup .filename': function () {
      var ins = Template.instance();
      if (ins) {
        ins.filename.set($('.filename').val());
      }
    }
  });

});

Template.uploadFile.helpers({
  uploadedFiles: function() {
    return Collections.Files.find();
  }
});
