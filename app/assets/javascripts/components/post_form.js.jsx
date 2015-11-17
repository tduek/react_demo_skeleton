(function(root) {
  root.PostForm = React.createClass({
    getInitialState: function() {
      return { title: "", image: null };
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
          </form>
          <img className="preview-image" ref="preview" src="" />
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
        that.updatePreview(reader.result);
      }

      if (file) {
        reader.readAsDataURL(file);
      } else {
        that.updatePreview("");
      }
    },

    updatePreview: function(url) {
      var preview = this.refs.preview.getDOMNode();
      preview.src = url;
    },

    handleSubmit: function(e) {
      e.preventDefault();
    }
  });
})(this);
