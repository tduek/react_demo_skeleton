(function(root) {
  root.PostForm = React.createClass({
    getInitialState: function() {
      return { title: "", imageUrl: "", imageFile: null };
    },

    render: function() {
      return (
        <div>
          <h2>New Post</h2>
          <form onSubmit={this.handleSubmit}>
            <label>Title
              <input type="text" onChange={this.changeTitle} value={this.state.title} />
            </label>

            <input type="file" onChange={this.changeFile} value={this.state.image} />

            <button>Submit</button>
          </form>
          <img className="preview-image" ref="preview" src={this.state.imageUrl} />
        </div>
      );
    },

    changeTitle: function(e) {
      this.setState({ title: e.currentTarget.value });
    },

    changeFile: function(e) {
      var reader = new FileReader();
      var file = e.currentTarget.files[0];
      var that = this;

      reader.onloadend = function() {
        that.setState({ imageUrl: reader.result, imageFile: file });
      }

      if (file) {
        reader.readAsDataURL(file);
      } else {
        that.updatePreview("");
      }
    },

    handleSubmit: function(e) {
      e.preventDefault();

      var title = this.state.title;
      var file = this.state.imageFile;

      var formData = new FormData();
      formData.append("post[title]", title);
      formData.append("post[image]", file);

      ApiUtil.createPost(formData, this.resetForm);
    },

    resetForm: function() {
      this.setState({ title: "", imageUrl: "", imageFile: null });
    }
  });
})(this);
